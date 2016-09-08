var push = require( 'pushsafer-notifications' );

var p = new push( {
	k: 'Your20CharPrivateKey',				// your 20 chars long private key
	debug: true
});

var msg = {
	m: 'This is a Node.js test message',	// message
	t: "Node.js Test",						// title
	s: '8',									// sound (value 0-28)
	v: '2',									// vibration (empty or value 1-3)
	i: '5',									// icon (value 1-98)
	d: '221'								// the device or device group id
};

// console.log( p );

p.send( msg, function( err, result ) {
	//console.log( 'ERROR:', err );
	console.log( 'RESULT', result );
	// process.exit(0);
});
