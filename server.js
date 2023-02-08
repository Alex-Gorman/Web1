'use strict';

// load package
const express = require('express');
const bodyParser = require("body-parser");

const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

/* Actual Code */
const fs = require('fs');

/* Path to check */
const path = './posts.txt';

/* Check if file exists */
if (fs.existsSync(path)) {
    console.log('File exists');
} else {
    console.log('Creating file');
    fs.writeFile('posts.txt', '', function(){});
}

app.use(bodyParser.urlencoded({ extended: true }))

function postMethod(topic, data) {
    let today = new Date();

    let month = today.getMonth();
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date = month+'/'+date+'/'+year;

    let hours = today.getHours();
    let minutes = today.getMinutes();
    
    let current_time = hours + ':' + minutes;

    let timestamp = 'date: ' + current_date + '. time: ' + current_time;

    fs.appendFile('posts.txt', topic + ':' + data 
    + ' -> ' +timestamp + '\n', function(){});
}

// postMethod('test2', 'hello');

app.post('/sayHello', (req, res) => {
    var topic = req.body.topic;
    var data = req.body.data;

    // console.log(topic, data);

    postMethod(topic, data);
    var response = new Object();
    // res.send('hello');

    response.answer = true;
    res.send(JSON.stringify(response));
})

// new function to get the data from text file and send to client
// just read file
// app.get()
app.get('/getData', (req, res) => {

    fs.readFile('posts.txt', 'utf8', function(err, data) {
        var response = new Object();
        response.answer = data;
        res.send(JSON.stringify(response));
    });


})

app.use('/', express.static('pages'));

app.listen(PORT, HOST);

console.log('up and running');




