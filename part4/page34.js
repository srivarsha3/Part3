//npm i ejs(embedded javascript template)
import express from "express";//express is a package that allows us to create a web server
const app = express();
app.set("view engine","ejs");//set the view engine to ejs, so that we can render ejs files
app.set("views","views");//set the views directory to ./views, so that we can render ejs files from the views directory
app.listen(8080,()=>console.log("Server is running on port 8080"));//start the server on port 8080
//http://localhost:8080/ in browser to see the result
// app.get("/login",(req,res)=>{
//     res.render("login");//render the login.ejs file when the user visits the root URL
// })
app.get("/register",(req,res)=>{
    res.render("register");//render the register.ejs file when the user visits the root URL
})
