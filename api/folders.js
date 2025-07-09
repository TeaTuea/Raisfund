let folders = []; // Replace with real DB or file storage

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return folders, possibly separate active/archive
    res.json({folders});
  } else if (req.method === 'POST') {
    const {name} = req.body;
    if (!name || name.length > 50) return res.status(400).json({error: 'Invalid name'});
    // Create folder
    const newFolder = {id: Date.now(), name, players: [], archived: false};
    folders.push(newFolder);
    res.json(newFolder);
  } else {
    res.status(405).end();
  }
}
