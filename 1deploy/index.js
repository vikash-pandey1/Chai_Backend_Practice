require('dotenv').config()
const express = require("express");
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send("welcom to root dir")
})

app.get('/twitter', (req, res) => {
    res.send("vikashdotcom");
})

app.get('/login', (req, res) => {
    res.send('<h1>welcome  to login routes </h1>')
})

app.get('/youtube', (req, res) => {
    res.redirect('https://www.youtube.com');
})
app.listen(process.env.PORT,() => {
    console.log(`port listening on ${port}`);
})