
const {connect} = require('./client');
console.log('Connecting ...');
connect();


/**
 * Setup User INterface
 * Specifically, so that we can handle user input via stdin
 * // Time to start listening for user input via keyboard. 
 * // For this we'll need our trusty stdin (standard input) object.
 * 
 */


const setUpInput = function (){

   const stdin = process.stdin;
   stdin.setRawMode(true);
   stdin.setEncoding('utf8');
   stdin.resume();

   const handleUserInput = function(key){
    if (key === '\u0003') {
      process.exit();
    }
   }

   stdin.on('data', handleUserInput);
  

  return stdin;

}

setUpInput();