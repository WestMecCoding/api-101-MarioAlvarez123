const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/3pm', (req, res) => {
    res.send('hello 3pm');
});

app.listen(port, () => {
    console.log(`sever is listening on port${port}`)
})

