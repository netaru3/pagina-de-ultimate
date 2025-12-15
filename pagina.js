import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
const apikey= process.env.API_KEY

const app= express()
app.get("/",function(req,res){
  res.sendFile("pagina.html",{root:import.meta.dirname})
})
app.get("/apikey",function(req,res){
  res.json({apikey:apikey})
})


app.get("/wiki",function(req,res){
  res.sendFile("wiki.html",{
    root: import.meta.dirname
  })
})
app.get("/:nombre",function(req,res){
res.sendFile("carta.html",{root:import.meta.dirname})
})

app.listen(process.env.PORT ||3000)
