var url = 'http://test-url.io/log';

function log(message){
    console.log(message);
}

//Exporting the log object
//module.exports.log = log;

//Exporting the single function
module.exports = log;