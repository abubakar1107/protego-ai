import { Buffer } from 'node:buffer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, company, message } = req.body;
  
  // To work on Vercel, we need to store data externally because Vercel 
  // doesn't keep local files (serverless). 
  // We will write directly to your GitHub repository using the GitHub API.
  
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;     // Create a Personal Access Token (Classic) with 'repo' scope
  const OWNER = process.env.GITHUB_REPO_OWNER;       // Your GitHub Username
  const REPO = process.env.GITHUB_REPO_NAME;         // Your Repository Name
  const FILE_PATH = 'submissions.csv';

  if (!GITHUB_TOKEN || !OWNER || !REPO) {
    return res.status(500).json({ 
      success: false, 
      message: 'Server Config Error: Missing GitHub Env Variables (GITHUB_TOKEN, OWNER, REPO)' 
    });
  }

  try {
    const timestamp = new Date().toISOString();
    
    // Helper to escape CSV fields
    const safe = (str) => {
      const s = String(str || '');
      return `"${s.replace(/"/g, '""')}"`;
    };

    const newLine = `${safe(timestamp)},${safe(name)},${safe(email)},${safe(company)},${safe(message)}\n`;
    const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;

    // 1. GET existing file to obtain SHA and current content
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Protego-App'
      }
    });

    let sha = undefined;
    let content = 'Timestamp,Name,Email,Company,Message\n'; // Default header

    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
      content = Buffer.from(data.content, 'base64').toString('utf-8');
    } else if (getResponse.status !== 404) {
      const errText = await getResponse.text();
      throw new Error(`GitHub GET Error: ${errText}`);
    }

    // 2. Append new data
    const updatedContent = content + newLine;
    const updatedContentBase64 = Buffer.from(updatedContent).toString('base64');

    // 3. PUT update back to GitHub
    const putResponse = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Protego-App',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `New Lead: ${name}`,
        content: updatedContentBase64,
        sha: sha, // Required to update an existing file
        committer: {
          name: "Protego AI Bot",
          email: "bot@protego.ai"
        }
      })
    });

    if (!putResponse.ok) {
      const errText = await putResponse.text();
      throw new Error(`GitHub PUT Error: ${errText}`);
    }

    return res.status(200).json({ success: true, message: 'Saved to GitHub CSV' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}