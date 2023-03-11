![Pushsafer](https://www.pushsafer.com/de/assets/logos/logo.png)

Send [pushsafer.com](https://www.pushsafer.com) notifications from Node.JS

Pushsafer make it easy and safe to get push-notifications in real time on your
- Android device
- iOS device (incl. iPhone, iPad, iPod Touch)
- Windows Phone & Desktop
- Browser (Chrome & Firefox)

[API description](https://www.pushsafer.com/en/pushapi)

## Usage

### Install

	npm install pushsafer-notifications
	
### Pushsafer API values

Any API parameters, as found on https://www.pushsafer.com/en/pushapi, can be passed in the object. Here's an example with many different parameters.

```javascript
var msg = {
	m: 'This is a Node.js test message',   // Message (required)
	t: "Node.js Test",                     // Title (optional)
	s: '8',                                // Sound (value 0-60) (optional)
	v: '2',                                // Vibration (empty or value 1-3) (optional)
	i: '5',                                // Icon (value 1-177) (optional)
	c: '#FF0000',                          // Icon color hexadecimal color code (optional) 
	d: '221',                              // Device or Device group id (optional)
	u: 'https://www.pushsafer.com',        // an URL (optional)
	ut: 'Pushsafer.com',                   // URLs title (optional)
	l: '10',                               // Time to Live (optional: 0-43200 minutes)
	pr: '2',                               // Priority (optional: -2, -1, 0, 1, 2)
	re: '60',                              // Retry (optional: 60-10800 seconds)
	ex: '60',                              // Expire (optional: 60-10800 seconds)
	cr: '20',                              // Confirm (optional: 10-10800 seconds)
	a: '1',				       // Answer
	ao: 'yes|no|maybe',		       // Answer Options seperated by a pipe character
	af: '1',			       // Force Answer
	p: '',                                 // Image converted to > Data URL with Base64-encoded string (optional)
	p2: '',                                // Image 2 converted to > Data URL with Base64-encoded string (optional)
	p3: ''                                 // Image 3 converted to > Data URL with Base64-encoded string (optional)
};
```
## Examples

### Sending a message
```javascript

var push = require( 'pushsafer-notifications' );

var p = new push( {
	k: 'Your20CharPrivateKey',             // your 20 chars long private key or 15 chars long alias key  (required)
	debug: true
});

var msg = {
	m: 'This is a Node.js test message',   // Message (required)
	t: "Node.js Test",                     // Title (optional)
	s: '8',                                // Sound (value 0-28) (optional)
	v: '2',                                // Vibration (empty or value 1-3) (optional)
	i: '5',                                // Icon (value 1-98) (optional)
	c: '#FF0000',                          // Icon color hexadecimal color code (optional)
	d: '221',                              // Device or Device Group id (optional)
	u: 'https://www.pushsafer.com',        // an URL (optional)
	ut: 'Pushsafer.com',                   // URLs title (optional)
	l: '10',                               // Time to Live (optional)
	pr: '2',                               // Priority (optional: -2, -1, 0, 1, 2)
	re: '60',                              // Retry (optional: 60-10800 seconds)
	ex: '60',                              // Expire (optional: 60-10800 seconds)
	cr: '20',                              // Confirm (optional: 60-10800 seconds)
	a: '1',                                // Answer
	ao: 'yes|no|maybe',                    // Answer Options seperated by a pipe character
	af: '1',                               // Force Answer
	p: '',                                 // Image converted to > Data URL with Base64-encoded string (optional)
	p2: '',                                // Image 2 converted to > Data URL with Base64-encoded string (optional)
	p3: ''                                 // Image 3 converted to > Data URL with Base64-encoded string (optional)
};

// console.log( p );

p.send( msg, function( err, result ) {
	//console.log( 'ERROR:', err );
	console.log( 'RESULT', result );
	// process.exit(0);
});

```
