let express = require('express');
let app = express();

<<<<<<< HEAD
require('dotenv').config();
=======
console.log("Hello World");
>>>>>>> 2b66c59113011c44e5573c6ad0722b69a68049b6

console.log("Hello World");

app.use("/public",express.static(__dirname + "/public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/views/index.html");
});

console.log(process.env.MESSAGE_STYLE);

app.get("/json",function(req,res){
  if(process.env.MESSAGE_STYLE==="uppercase"){
    res.json( {"message": "HELLO JSON"} );
    console.log("Entró en UPPERCASE");
  } else{
    res.json( {"message": "Hello json"} );
    console.log("Entro en uppercase");
  }
});


































 module.exports = app;
