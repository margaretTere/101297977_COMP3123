
const mongoose = require('mongoose');
const app = require('./app');

//const DB_URL = "mongodb+srv://sa:s3cr3t@cluster0.qa3t4.mongodb.net/gbc-fall2020?retryWrites=true&w=majority"

const DB_URL = "mongodb+srv://3325285393:3325285393@cluster0.tkujc.mongodb.net/lab6?retryWrites=true&w=majority&appName=Cluster0"
// TODO - Update your mongoDB Atals Url here to Connect to the database

mongoose.connect(DB_URL 

).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});