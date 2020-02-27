
// let something = require('./log');

// something.info("The weather is cold");

// let the_string = require('./mystring');

// console.log(the_string);

const request = require('request');

request('http://www.google.com', function(error, response, body){

    console.log(`body: ${body}`);

});

