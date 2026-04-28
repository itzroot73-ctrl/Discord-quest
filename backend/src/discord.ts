import WebSocket from 'ws';
export class DiscordClient {
    private ws: any; private token: string; private appId: string;
    constructor(token: string, appId: string) { this.token = token; this.appId = appId; }
    start() {
        this.ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');
        this.ws.on('message', (data: any) => {
            const p = JSON.parse(data);
            if (p.op === 10) {
                this.ws.send(JSON.stringify({ op: 2, d: { token: this.token, properties: { os: 'linux', browser: 'chrome', device: '' } } }));
                setInterval(() => this.ws.send(JSON.stringify({ op: 1, d: null })), p.d.heartbeat_interval);
            }
        });
        this.ws.on('close', () => setTimeout(() => this.start(), 5000));
    }
}
