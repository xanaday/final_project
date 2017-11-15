'use strict'
$( document ).ready(function() {
    
const express = require('express');
const app = express();
const parser = require('body-parser');

const stats = require('./data/stats-2016');
// console.log(stats.length);

app.use(parser.urlencoded({ extended: false })); // global use of body-parser 
app.use(express.static('public')); // static assets are service under the 'public' folder
app.set('view engine', 'ejs'); // ejs as the rendering engine

app.get('/', function(req, res) {
    res.render('index.ejs', {
        stats: JSON.stringify({"stats": stats})
    })
});

app.listen(3000, function(){
    console.log('listening on port 3000')
});
});