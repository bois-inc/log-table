#!/usr/bin/env node 
let fs = require('fs')
let args = JSON.parse(JSON.stringify(process.argv)); args.shift(); args.shift();
if (args.length < 1) { throw new Error('Usage: ./logtable.js  [json file]'); }

console.table(args)

let fname = args.shift()
let file = JSON.parse(fs.readFileSync(fname).toString())

let layer = 0
while (args.length > 0) { 
    nextkey = args.shift() 
    console.log(layer + ": Keys -> " + JSON.stringify(Object.keys(file)).toString() + " -> " + nextkey); 
    file = file[nextkey]
    layer++ }

console.log(layer + ": Keys -> " + JSON.stringify(Object.keys(file)).toString()); 


console.table(file)
