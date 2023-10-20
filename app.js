const path = require('path') 
// fs allows us to work with the file system
const express= require('express')
const bodyparser  = require('body-parser')
const app = express()

const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop')
const successRoutes = require('./routes/success');
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminroutes)

app.use(shoproutes)
app.use('/success',successRoutes);

app.use('/contact',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'view','contact.html'));
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
})

app.listen(4303)
 // learn start fron express 9 video


    










