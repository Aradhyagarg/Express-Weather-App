const express = require("express");
const app=express();

app.get("/", (req, res)=>{
    res.send("hi how are you");
});

app.get("/about", (req, res)=>{
    res.send("welcome to the about page");
});

app.get("/contact", (req, res) => {
    res.send("welcome to the contact page");
});

app.get("/temp", (req, res) => {
    res.send("welcome to the temp page");
});

app.get("/aradhya", (req, res) => {
    res.json([
        {
        id:1,
        name:"aradhya",
    },
    {
        id:1,
        name:"aradhya",
    },
    {
        id:1,
        name:"aradhya",
    },
]);
});

app.listen(8000, ()=>{
    console.log("listening");
})