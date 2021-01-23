const express = require('express');
const app = express();
const config = require('./Config/config');







app.listen(config.PORT,()=>{
    console.log('Starting Port....'+config.PORT);
});