/*const express = require("express");
const app=express();
app.get("/", (req,res)=>{
    res.send("hello from express");
});
app.get("/about", (req,res)=>{
    res.send("hello from express fuck you");
});
app.listen(8000, () => {
    console.log("listing the port is 8000");
})*/
//get=read
//post=create
//put=update
//delete=delete
/*const path = require("path");
const express = require("express");
const app=express();
const staticPath=path.join(__dirname,"../mynewpublic");
const template=path.join(__dirname, "../templates");
//setviewengine
app.set("view engine","hbs");
app.set("views", template);
//app.use(express.static(staticPath));
//template engine route
//render is for to view the website content
/*app.get("", (req, res)=>{
    res.render("index");
})
app.get("", (req, res)=>{
    res.render("index", {
        hipuppy:"hi",
    });
})
app.get("/", (req,res)=>{
    res.send("hello from express");
});

app.listen(8000, () => {
    console.log("listing the port is 8000");
});
*/
const path = require("path");
const express = require("express");
const app=express();
const hbs=require("hbs");
const requests = require("requests")
const staticPath=path.join(__dirname,"../mynewpublic");
const template=path.join(__dirname, "../templates/views");
const partical= path.join(__dirname, "../templates/partials");
//setviewengine
app.set("view engine","hbs");
app.set("views", template);
hbs.registerPartials(partical);
//app.use(express.static(staticPath));
//template engine route
//render is for to view the website content
/*app.get("", (req, res)=>{
    res.render("index");
})*/
app.get("", (req, res)=>{
    res.render("index", {
        hipuppy:"hi",
    });
})
app.get("/", (req,res)=>{
    res.send("hello from express");
});

app.get("/about", (req,res)=>{
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=${process.env.APPID}`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
          console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
          
          res.write(arrData[0].name);
          // console.log(realTimeData);
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
});

app.get("*", (req, res)=>{
    res.render("404", {
        errorcomemnt:"Oops this will happen",
    });
})

app.listen(8000, () => {
    console.log("listing the port is 8000");
})