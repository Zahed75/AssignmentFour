var express = require('express');

var app = express();
//multer setup

var multer = require('multer');

var multer = multer();


var bodyParser = require('body-parser');

app.use(bodyParser.json());


app = express();

app.use(multer.array())
app.use(express.static('public'))

//Multipart Data

app.post("/upload", function (req, res) {
    let JSONData = req.body;

    res.send(JSON.stringify(JSONData))
});


//===============================================


//post in header method and Query Method
app.post("/headPost", function (req, res) {
    let userName = req.header("userName");
    let password = req.header("password");
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let result = userName + password;
    let fullName = firstName + lastName
    res.send(result + "" + fullName)
    res.status(200,).end("Data Send Successful")
});








//multer setup

var multer=require('multer');



//File Upload Setup

var storage=multer.diskStorage({
    function(req,file,callback){
        callback(null,'./uploads');
    },

    functions(req,file,callback){
        callback(null,file.originalname)
    }
});

var upload=multer({storage:storage}).single('myfile')

app=express();




//File Upload API

app.post("/File",function (req,res){
    upload(req,res,function (error){
        if(error){
            res.send("File Upload Failed!");
        }
        else{
            res.send("File Upload Success!");
        }
    })
})


// File Download API


app.get("/dow",function (req,res){

    res.download("./uploads/Backend Development and REST API Development.jpg");
})




module.exports = app;





