const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const port = 4000;
const host = 'localhost';

app.use(bodyParser.json());
app.all('/',(req,res, next) =>{
     console.log(req.headers);
     res.statusCode = 200;
     res.setHeader('Content-Type','text/html');
     next();
});
app.get('/',(req, res,next) =>{
 res.end("you are getting the right dish");
});


const server = http.createServer(app);
server.listen(port , host , () =>{
    console.log(`server is listen to port http://${host}:${3000}`);
})