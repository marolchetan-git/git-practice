const express = require("express")

const app = express()

app.get("/", (req, res) =>{
    res.send("Hello")
})

app.post("/post", (req, res)=>{
    res.send("Get")
})

app.listen(3000, () =>{
    console.log("Running!!")
})