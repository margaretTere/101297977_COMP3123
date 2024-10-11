const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const noteRouter = require('./routes/NoteRoutes');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/notes', noteRouter)



module.exports = app;
