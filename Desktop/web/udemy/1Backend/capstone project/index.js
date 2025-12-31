


import express from "express";
import bodyParser from "body-parser";
 
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

import { dirname } from "path";
import { fileURLToPath } from "url";

var userIsAuthorised = false;
app.get("/" , (req , res)=>{
  res.render("login.ejs");  

});



// function passwordCheck(req, res, next) {
//   const { password } = req.body;
//   if (password === "thekinginnorth") {
//     userIsAuthorised = true;
//   }
//   next();
// }
// app.use(passwordCheck);




app.post("/login" , (req , res)=>{
  const  password  = req.body["password"];


  //  app.use(authentication(myEmail , myPassword));

// app.use(passwordChecker);
 
  if (password === "123") {
     userIsAuthorised = true;
    res.redirect("/blog");
  } else {
    res.render("login.ejs");
  }
});

  // if (userIsAuthorised ) {
  //   res.render("/blog");
  //   // console.log( req.body["logpass"])
    
  // }
  // else{
  //   res.render("login.ejs");
  //   // prompt("incorrect password");
  // }

  

  app.get("/blog", (req , res )=>{
     if (!userIsAuthorised) return res.redirect("/");
  res.render("index.ejs");
  })








app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

