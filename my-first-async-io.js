let fs = require('fs');

let file = process.argv[2]

fs.readFile(file, (error, contents)=>{
    let lines = contents.toString().split('\n').length - 1
    console.log(lines);
});