let mo = require('./lib.js');

mo.thisarray();

let stdin = process.openStdin()
stdin.addListener("data", (d) => {
    for(let i=0;i<array.length;i++)
        console.log( d.toString().trim() + ' x ' + array[i]+ ' =  ' + array[i]*d)
    stdin.end()
});