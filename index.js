const express=require("express")
const app=express()
const path=require("path")
const mongoose=require('mongoose')
const routes=require("./router/update.route")
app.use(function(req, res, next) {


  res.header("Access-Control-Allow-Origin","*"); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  

  
  });
app.use(express.json({extended:true}))
app.use("/api", routes)
app.use(express.urlencoded({extended:false}))
app.use('/images',express.static(path.join(__dirname,"images")))
app.use(express.static(path.join(__dirname, 'build')));

const PORT=process.env.PORT || 5000
const start=async()=>{
    try{
await mongoose.connect('mongodb+srv://kenan:2002azer@cluster0.mhl8v.mongodb.net/?retryWrites=true&w=majority',{})
    app.listen(PORT,()=>{
        console.log("Server has been launched...")
    })
}catch(e){
    console.log(e)
}
}
start()
