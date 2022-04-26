const http = require("http");
const express = require('express');
const PORT = 7400;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json(), express.static('public'), express.urlencoded({ extended: true }));

const server = http.createServer(app);

app.get('/', (req, res) => res.render('index'));

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.status(200).json({msg: "Success!"})
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}.`));