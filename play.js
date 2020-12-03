
const {connect} = require('./client');
const {setupInput} = require('./input');
console.log('Connecting ...');
// connect tot he server
connect();


/**
 * Setup User INterface
 * Specifically, so that we can handle user input via stdin
 * // Time to start listening for user input via keyboard. 
 * // For this we'll need our trusty stdin (standard input) object.
 * 
 */
setupInput();



