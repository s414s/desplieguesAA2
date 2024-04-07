const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello World!</h1>
    <p>Bienvenido a mi Express.js app.</p>
    <a href="/about">About Me</a>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
    <h1>Página about</h1>
    <p>Bienvenido a mi página about.</p>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});