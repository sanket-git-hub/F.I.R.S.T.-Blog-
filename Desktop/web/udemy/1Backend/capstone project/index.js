


import express from "express";
import bodyParser from "body-parser";
 
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

import { dirname } from "path";
import { fileURLToPath } from "url";

app.get("/" , (req , res)=>{
  res.render("login.ejs");
});


var myPassword ="" ;
var myUser_name = "";
var myEmail = "";
function passwordChecker(req, res, next) {
  console.log(req.body);

   myPassword = req.body["logpass"];

   myEmail = req.body["logemail"];

  
  next();
}


app.use(passwordChecker);

app.post("/submit" , (req , res)=>{
  


  // app.use(authentication(myEmail , myPassword));


 
  if ("jonsnow@gmail.com" === myEmail && "thekinginnorth" === myPassword  ) {
    res.render("index.ejs");
    // console.log( req.body["logpass"])
    
  }
  else{
    res.render("login.ejs");
    // prompt("incorrect password");
  }

  })









app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

 