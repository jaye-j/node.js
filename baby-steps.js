let array = process.argv

let something = 0

for (let i = 2; i < array.length; i++){
    something += Number(array[i])
}

console.log(something);