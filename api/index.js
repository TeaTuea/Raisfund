let players = [];

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { firstName, lastName, birthdate } = req.body;

  if (!firstName || !lastName || !birthdate) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  if (players.length >= 456) {
    res.status(400).json({ error: 'Player limit reached' });
    return;
  }

  const existing = players.find(
    p => p.firstName === firstName && p.lastName === lastName && p.birthdate === birthdate
  );

  if (existing) {
    res.status(200).json({ playerNumber: existing.playerNumber, message: 'Player already registered' });
    return;
  }

  const playerNumber = (players.length + 1).toString().padStart(3, '0');
  const newPlayer = { firstName, lastName, birthdate, playerNumber };

  players.push(newPlayer);

  res.status(200).json({ playerNumber, message: 'Player registered' });
}
