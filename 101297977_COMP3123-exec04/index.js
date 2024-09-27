const express = require('express');


const PORT = process.env.PORT ||  8000;
const app = express();


app.get('/hello', (req,res) => {
    res.send("Hello Express JS");
});


app.get('/user', (req,res) => {
    res.json({
        firstname: req.query.firstname,
        lastname: req.query.lastname
    });
  
});

app.post('/user/:firstname/:lastname', (req,res) =>{

    res.json({
        firstname: req.params.firstname,
        lastname: req.params.lastname
    });
});

app.listen(PORT, () => {

    console.log(`Lab4 is running on port ${PORT}....`);
});

module.exports = app;