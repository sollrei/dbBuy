
'use strict';

const WebSocket = require('ws');

console.log(`\
Hi this is WebSocket server
`);

const server = new WebSocket.Server({port: 5555});

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            const msg = JSON.parse(message);
            if (msg[0].text) {
                ws.send(msg[0].text);
            }
        } catch (e) {

        }

    });
});
