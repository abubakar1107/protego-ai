import { Buffer } from 'node:buffer';

export default async function handler(req, res) {
  // Ensure we are returning JSON, even in error cases
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, company, message } = req.body;
    
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const OWNER = process.env.GITHUB_REPO_OWNER;
    const REPO = process.env.GITHUB_REPO_NAME;
    const FILE_PATH = 'submissions.csv';

    // Debugging: Check if env vars are loaded (Don't log the actual token!)
    if (!GITHUB_TOKEN || !OWNER || !REPO) {
      console.error("Missing Env Vars. Owner:", OWNER, "Repo:", REPO, "Token Set:", !!GITHUB_TOKEN);
      return res.status(500).json({ 
        success: false, 
        message: 'Server Config Error: Missing GitHub Environment Variables. Check Vercel Settings.' 
      });
    }

    const timestamp = new Date().toISOString();
    
    // Helper to escape CSV fields
    const safe = (str) => {
      const s = String(str || '');
      return `"${s.replace(/"/g, '""')}"`;
    };

    const newLine = `${safe(timestamp)},${safe(name)},${safe(email)},${safe(company)},${safe(message)}\n`;
    const apiUrl = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`;

    // 1. GET existing file
    const getResponse = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Protego-App'
      }
    });

    let sha = undefined;
    let content = 'Timestamp,Name,Email,Company,Message\n'; 

    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
      content = Buffer.from(data.content, 'base64').toString('utf-8');
    } else if (getResponse.status !== 404) {
      const errText = await getResponse.text();
      // If we get a 403 or 401, it's usually a permission error
      console.error("GitHub GET Error:", getResponse.status, errText);
      throw new Error(`GitHub Error (${getResponse.status}): Check Token Permissions. ${errText}`);
    }

    // 2. Append new data
    const updatedContent = content + newLine;
    const updatedContentBase64 = Buffer.from(updatedContent).toString('base64');

    // 3. PUT update
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
        sha: sha,
        committer: {
          name: "Protego AI Bot",
          email: "bot@protego.ai"
        }
      })
    });

    if (!putResponse.ok) {
      const errText = await putResponse.text();
      console.error("GitHub PUT Error:", putResponse.status, errText);
      throw new Error(`GitHub Save Error (${putResponse.status}): ${errText}`);
    }

    return res.status(200).json({ success: true, message: 'Saved to GitHub CSV' });

  } catch (error) {
    console.error('API Handler Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: error.message || 'Internal Server Error' 
    });
  }
}