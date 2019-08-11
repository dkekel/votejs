const express = require('express');
const server = express();
const port = 3000;

server.get("/list", (req, res) => res.send('Spring vs. MeteorJS'));

server.listen(port, () => console.log("Listening"));