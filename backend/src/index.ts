import express from 'express'; import cors from 'cors'; import { DiscordClient } from './discord';
const app = express(); app.use(cors()); app.use(express.json());
const clients = new Map();
app.post('/api/start', (req, res) => {
    const { token, appId } = req.body;
    const client = new DiscordClient(token, appId); client.start();
    clients.set(token, client); res.json({ status: 'active' });
});
app.listen(process.env.PORT || 3001, () => console.log('API_READY'));
