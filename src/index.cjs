[
	require('./bot.cjs'),
	require('./server.cjs'),
].forEach((cmd) => cmd.start());
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Dark Uptime tarafından uptime edilmektedir.'));

app.listen(port, () =>
    console.log(`Bot bu adres üzerinde çalışıyor: http://localhost:${port}`)
);
