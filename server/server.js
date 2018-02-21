"use strict"
var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 3000 ;

app.get('/', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname + req.url);
  }else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Express server Start on port : '+ PORT);
})
