var push = require( 'pushsafer-notifications' );

var p = new push( {
	k: 'Your20CharPrivateKey',		// your 20 chars long private key or 15 chars long alias key
	debug: true
});

var msg = {
	m: 'This is a Node.js test message',	// message
	t: "Node.js Test",			// title
	s: '8',					// sound (value 0-28)
	v: '2',					// vibration (empty or value 1-3)
	i: '5',					// icon (value 1-98)
	d: '221',				// the device or device group id
	p: '',                                  // Image converted to > Data URL with Base64-encoded string
	p2: '',                                 // Image 2 converted to > Data URL with Base64-encoded string
	p3: ''                                  // Image 3 converted to > Data URL with Base64-encoded string
};

// console.log( p );

p.send( msg, function( err, result ) {
	//console.log( 'ERROR:', err );
	console.log( 'RESULT', result );
	// process.exit(0);
});
