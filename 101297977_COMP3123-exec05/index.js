const fs = require('fs');
const express = require('express');

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/', router);
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res
  .type('html')
 .sendFile('home.html',{root: __dirname});
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res,next) => {
   fs.readFile('user.json',(err,data) =>{
    if(err)
      next(err);
    else
    res
    .type('json')
    .json(JSON.parse(data))
    .end();
  });
  
});

/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
// localhost:8081/login
router
.post('/login', (req,res, next) => {
  const req_password = req.body.password;
  const req_username = req.body.username;

  fs.readFile('user.json',(err,data) =>{
    if(err){
      next(err);
    } else {

    const user = JSON.parse(data);

    const password = user.password;
    const username = user.username;
    
    if(password === req_password && username === req_username){
      res
        .status(200)
        .type('json')
        .json( {
          status: true,
          message: "User Is valid"
        });
    } else if(username != req_username){
      res
      .status(401)
      .type('json')
      .json({
        status: false,
        message: "User Name is invalid"
    });
    } else if (password != req_password){
      res
      .status(401)
      .type('json')
      .json({
        status: false,
        message: "Password is invalid"
    });

    }else{
      throw new Error("Impossible case");
    }
    res.end();
  }
  });
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  res
  .type('html')
  .send(`<b>${req.params.username} successfully logout.<b>`);
});


/*
Add error handling middleware to handle below error
- Return 500 page with message "Server Error"
*/
app.use((err,req,res,next) => {
  console.log(err.stack);
  res
    .status(500)
    .type('json')
    .json({message: 'Server Error'})
    .end();
});

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));