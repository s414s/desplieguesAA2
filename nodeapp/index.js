const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><p>Welcome to my Express.js app.</p>');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});