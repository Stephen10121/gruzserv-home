const http = require("http");
const express = require('express');
const PORT = 7400;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json(), express.static('public'), express.urlencoded({ extended: true }));

const server = http.createServer(app);

app.get('/', (req, res) => res.render('index'));

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));