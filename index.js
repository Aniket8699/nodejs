const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('<h3>Welcome to Wordpress </h3>s')
})

app.listen(8080,function(){
    console.log("Welcome to NodeJS Setup","Runnign at 3000")
})