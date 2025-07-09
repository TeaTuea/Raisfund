let folders = [...]; // shared or imported from folders.js data

export default function handler(req, res) {
  const {folderId} = req.query;
  const folder = folders.find(f => f.id === Number(folderId));
  if (!folder) return res.status(404).json({error: 'Folder not found'});

  if (req.method === 'POST') {
    // Create player
    const {firstName, lastName, birthYear, picture} = req.body;
    if (folder.players.length >= 456) return res.status(400).json({error: 'Max players reached'});
    const playerNumber = folder.players.length + 1;
    const player = {id: Date.now(), playerNumber, firstName, lastName, birthYear, picture, eliminated: false};
    folder.players.push(player);
    res.json(player);
  } else if (req.method === 'PATCH') {
    // Edit player
    // ...
  } else if (req.method === 'DELETE') {
    // Delete player
    // ...
  } else {
    res.status(405).end();
  }
}
