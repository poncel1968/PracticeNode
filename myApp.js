let express = require('express');
let app = express();

require('dotenv').config();

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
