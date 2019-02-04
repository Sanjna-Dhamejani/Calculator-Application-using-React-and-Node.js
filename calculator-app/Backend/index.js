//import the require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.post('/cal',function(req,res){
    console.log("Inside Calculate Post Request");
    console.log("Req Body : ",req.body.toCalculate);
    var evaluatedResult = eval(req.body.toCalculate);
    console.log(evaluatedResult);
    res.writeHead(200,{
        'Content-Type' : 'text/plain'
        })
        res.end(evaluatedResult.toString());
});

//start your server on port 3002
app.listen(3002);
console.log("Server Listening on port 3002");
