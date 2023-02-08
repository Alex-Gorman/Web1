'use strict';

// load package
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

// app.get('/greeting', (req, res) => {
//     res.send('hello');
// })

// app.use('/', express.static('pages'));

// app.listen(PORT, HOST);

// console.log('up and running');



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

postMethod('test2', 'hello');



