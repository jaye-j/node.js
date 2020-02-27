
// const http = require('http');

// let myServer = http.createServer((req, res)=>{
//     //here where code goes

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');

//     res.end("<h1 style='color: yellow'>HELLO WORLD</h1>");

// });


// myServer.listen(3000, ()=>{
//     console.log('we are listening on port 3000');
// });

const http = require('http');

const fs = require('fs');

let fileContent = "lorem ispsum dolor ......."

fs.writeFile("ourFile.txt", fileContent, (error)=>{

    if (error){
        console.log(error.message);
    return;
    }
    console.log('File: ourFile.txt was saved');
});