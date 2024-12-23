const express = require("express")

const app = express()

const PORT = 3333


app.get("",(req,res)=>{
    res.send("Hello World!!");
    res.end()
})



app.listen(PORT,()=>{
    console.log("App is Connected");
    
});