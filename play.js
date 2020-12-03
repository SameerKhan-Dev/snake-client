
const {connect} = require('./client');
const {setupInput} = require('./input');
console.log('Connecting ...');
// connect tot he server
// client connection object is conn which is returned by client.js
conn = connect();


/**
 * Setup User INterface
 * Specifically, so that we can handle user input via stdin
 * // Time to start listening for user input via keyboard. 
 * // For this we'll need our trusty stdin (standard input) object.
 * 
 */
setupInput(conn);



