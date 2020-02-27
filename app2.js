
const http = require('http');

let myServer = http.createServer((req, res)=>{
    //here where code goes

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end("<h1 style='color: yellow'>HELLO WORLD</h1>");

});


myServer.listen(3000, ()=>{
    console.log('we are listening on port 3000');
});