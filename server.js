
const express = require("express");
const bodyParser = require("body-parser");
const methods = require("./router");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", methods);

const port =  4444;

server = app.listen(port, () => console.log(`Server running on port ${port}`));


module.exports = server;
