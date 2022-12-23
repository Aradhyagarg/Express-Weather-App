const path = require("path");
const express = require("express");
const app=express();
const hbs=require("hbs");

//static
const static_path=path.join(__dirname, "../public");
const template=path.join(__dirname, "../templates/views");
const partical= path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set("views", template);
hbs.registerPartials(partical);
app.use(express.static(static_path));


app.get("/", (req, res)=>{
    res.render('index');
})

app.get("/about", (req, res)=>{
    res.render('about');
    //res.send("welcome to my website");
})

app.get("/weather", (req, res)=>{
    res.render('weather');
})

app.get("*", (req, res)=>{
    res.render("404", {
        errorMsg: 'Oops! Page Not Found'
    })
})

app.listen(process.env.PORT || 8000, () => {
    console.log("listing the port is 8000");
})