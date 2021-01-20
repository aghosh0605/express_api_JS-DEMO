
const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());

//View Data
app.get("/", (req,res)=>{
    let rawData = fs.readFileSync("data.json");
    res.json(JSON.parse(rawData));
    
});

//Write Data
app.post("/",(req,res)=>{
    let rawData = fs.readFileSync("data.json");
    let jsObject = JSON.parse(rawData.toString());
    let iData = req.body;
    
    jsObject.push({
        name : iData.name,
        age: iData.age,
    });
    //console.log(iData);
    //res.send("Got the new data!");
    fs.writeFileSync("data.json", JSON.stringify(jsObject));
    res.send("Added Database\n" + JSON.stringify(iData));
});

//Update Data
app.put("/", (req,res)=>{
    let rawData = fs.readFileSync("data.json");
    let jsObject = JSON.parse(rawData.toString());
    let iData = req.body;
    for(let i = 0; i<jsObject.length; i++ ){
        countObject = jsObject[i];
        if (countObject.name === iData.name){
            countObject.age = iData.age;
            break;
        }
    }
    fs.writeFileSync("data.json", JSON.stringify(jsObject));
    res.send("Updated Database\n" + JSON.stringify(iData));
})

//Delete Data
app.delete("/", (req,res)=>{
    let rawData = fs.readFileSync("data.json");
    let jsObject = JSON.parse(rawData.toString());
    let iData = req.body;
    let newjsObject = jsObject.filter((delObject)=>{
        return delObject.name !== iData.name;
    });
    fs.writeFileSync("data.json", JSON.stringify(newjsObject));
    res.send("Deleted Data\n"  + JSON.stringify(iData));
})

//Server running port
app.listen(8888,()=>{
    console.log("Server serving on port 8888. Use POSTMAN for better output!")
})
