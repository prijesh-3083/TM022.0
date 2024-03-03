const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const User = require("./models/user.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));//parsing
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const MONGO_URL = "mongodb://127.0.0.1:27017/eco";

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.listen(3000,()=>{
    console.log("server is running on port no 3000");
})

//root
app.get("/", (req, res) => {
    res.send("i am a home page");
});

//home
app.get("/home",(req,res)=>{
    res.render("includes/home.ejs");
})

//register
app.get("/register", async (req, res) => {
    res.render("includes/register.ejs");
});
app.post("/regiser", async (req, res) => {
    res.redirect("/login");
});

//login
app.get("/login",(req,res)=>{
    res.render("includes/login.ejs");
});
app.post("/login",async (req,res)=>{
    res.redirect("/home");
})

//about us
app.get("/about",(req,res)=>{
    res.render("includes/about.ejs");
})

//Process
app.get("/process",(req,res)=>{
    res.render("includes/process.ejs");
})

//contact us
app.get("/contact",(req,res)=>{
    res.render("includes/contact.ejs");
})

//get info
app.get("/info",(req,res)=>{
    res.render("includes/info.ejs");
})

//play quiz
app.get("/quiz",(req,res)=>{
    res.render("includes/quiz.ejs");
})

//leadboard
app.get("/leadboard",(req,res)=>{
    res.render("includes/leadboard.ejs");
})