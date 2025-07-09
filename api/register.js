import fs from 'fs';
import path from 'path';

const DATA_FILE = path.resolve('./data/players.json');
const MAX_PLAYERS = 456;

function readPlayers() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
}

function writePlayers(players) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(players, null, 2));
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { firstName, lastName, birthDate } = req.body;
  if (!firstName || !lastName || !birthDate) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  let players = readPlayers();

  if (players.length >= MAX_PLAYERS) {
    res.status(400).json({ error: 'Max players reached' });
    return;
  }

  // Assign next player number
  const nextNumber = players.length + 1;
  const playerNumber = String(nextNumber).padStart(3, '0');

  const newPlayer = {
    playerNumber,
    firstName,
    lastName,
    birthDate,
    registeredAt: new Date().toISOString(),
  };

  players.push(newPlayer);
  writePlayers(players);

  res.status(200).json({ message: 'Player registered', playerNumber });
}
