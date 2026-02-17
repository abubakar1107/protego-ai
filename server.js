
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Allow frontend to communicate with backend
app.use(cors());
app.use(express.json());

const CSV_FILE_PATH = path.join(__dirname, 'submissions.csv');

// Initialize CSV with headers if it doesn't exist
if (!fs.existsSync(CSV_FILE_PATH)) {
  const headers = 'Timestamp,Name,Email,Company,Message\n';
  fs.writeFileSync(CSV_FILE_PATH, headers);
}

app.post('/api/contact', (req, res) => {
  const { name, email, company, message } = req.body;

  console.log(`[LOCAL DEV] Received submission from: ${name}`);

  try {
    const timestamp = new Date().toLocaleString();
    
    // Helper to escape CSV fields (wrap in quotes, escape internal quotes)
    const escapeField = (field) => {
      const stringField = String(field || '');
      return `"${stringField.replace(/"/g, '""')}"`;
    };

    const csvLine = [
      escapeField(timestamp),
      escapeField(name),
      escapeField(email),
      escapeField(company),
      escapeField(message)
    ].join(',') + '\n';

    // Append the new line to the file
    fs.appendFileSync(CSV_FILE_PATH, csvLine);
    
    console.log('[LOCAL DEV] Saved to submissions.csv');
    res.status(200).json({ success: true, message: 'Submission saved successfully' });
  } catch (error) {
    console.error('Error saving to CSV:', error);
    res.status(500).json({ success: false, message: 'Failed to save submission.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 LOCAL SERVER running at http://localhost:${PORT}`);
  console.log(`📝 Local data will be saved to: ${CSV_FILE_PATH}`);
  console.log(`⚠️  NOTE: When deployed to Vercel, the app uses api/contact.js and writes to GitHub instead.\n`);
});
