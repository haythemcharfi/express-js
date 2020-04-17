const express=require('express')
const app=express()



app.use(time=(req,res,next)=>{
    let requestAt=new Date()
    let time=requestAt.getHours()
    if((time<8)||(time>11)){
   
  
   return res.send('Our office is not open now')
    }
    next()
})
app.get('/home',(req,res)=>{
res.sendFile(__dirname+'/public/home.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
    })
 app.get('/ourServices',(req,res)=>{
        res.sendFile(__dirname+'/public/ourservices.html')
        })



/*app.get('/home',(req,res)=>{
    let requestAt=new Date()
    let time=requestAt.getHours()
    if((time<8)||(time>22))
    res.send('Our office is not open now')
    else res.sendFile(__dirname+'/public/home.html')
})*/


app.listen(5000,(err)=>{
    if (err) console.log('erreur')
    else console.log('server is runnig on port 5000')
})