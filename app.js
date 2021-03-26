const express=require('express')
const app=express();
const bodyparser=require('body-parser')


//middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))


app.get('/student/studentlist',(req,res)=>{
    return res.send({results:[
        "Rajesh",
        "Ram",
        "Sourav",
        "shyam"
    ]})
})



app.listen(8000,()=>{
    console.log("server connected to 8000")
})