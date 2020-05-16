import * as express from "express";
import *  as cors from 'cors'
import * as bodyParser from 'body-parser'

const app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/exampleresource", async (req, res) => {
    try {
        console.log(req.body)
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400)
    }
})

app.listen(config.server.port, () => {
    console.log(`Server is running in http://localhost:${config.server.port}`)
})