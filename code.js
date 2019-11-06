function sayHello(name){
    console.log("Hello " + name + "!");
}

sayHello("Addison");

//Note: There exists a global object called 'global' which holds variables such as console
//i.e. global.console.log('');

//Printing out the module's properties
console.log(module);

//Importing module 'logger'
//Note: It is good practice to have these import variables constant, so we're gonna use 'const' instead of 'var'
/*const logger = require('./logger');
console.log(logger);
logger.log('I am a potato');*/
const log = require('./logger');
log('I am a potato 2, electric boogaloo');

//Node wraps each module in a 'function' called the 'module wrapper function'
    // function (exports, require, module, __filename, __dirname){...}
    //We can print these out!

console.log("Filename: " + __filename);
console.log("Path2Dir: " + __dirname);

//Using Path module to work with paths
const path = require('path');
var pathobj = path.parse(__filename);   //parsing path
console.log("__filename path parse: \n");
console.log(pathobj);

//Using OS module
const os = require('os');
var uptime = os.uptime();
var totalmem = os.totalmem();

//Using template literals (defined in ECMAScript)
console.log(`OS uptime: ${uptime} seconds, or ${uptime/3600} + hours.`);
console.log(`Total Memory: ${totalmem}\n`);

//Module fs
const fs = require('fs');
const files = fs.readdirSync('./'); //Synchronous form
console.log(`Sync: ${files}\n`);

fs.readdir('./', function(err, files){  //Async
    if (err) console.log('Error', err);
    else console.log(`Async: ${files}`); //Print error
});
