
const http = require('http'); // 1 - Import Node.js core module

const server = http.createServer((request, response) => {   // 2 - creating server
    //handle incomming requests here..

    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain')
    // response.end("Hello World")

    switch(request.url){

        case '/':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain')
            response.end("Home page")
            break;

        case '/aboutUs':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain')
            response.end("About Us")
            break;

        default:
            response.statusCode = 404;
            response.end('Page not found');

    }

});

//3 - listen for any incoming requests
server.listen(5000, () =>{
    console.log("running on port 5000");
});

