const express = require('express');
const app = express();
const config = require('./Config/config');
const path = require('path');



// middlewares

app.use(express.static('Public'));
app.set('view engine','ejs');
app.set('Views',path.join(__dirname,'Views'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(config.PORT,()=>{
    console.log('Starting Port....'+config.PORT);
});