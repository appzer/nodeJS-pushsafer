![Pushsafer](https://www.pushsafer.com/de/assets/logos/logo.png)

Send [pushsafer.com](https://www.pushsafer.com) notifications from Node.JS

Pushsafer make it easy and safe to get push-notifications in real time on your
- Android device
- iOS device (incl. iPhone, iPad, iPod Touch)
- Windows Phone & Desktop
- Browser (Chrome & Firefox)

## Usage

### Install

	npm install pushsafer-notifications
	
### Pushsafer API values

Any API parameters, as found on https://www.pushsafer.com/en/pushapi, can be passed in the object. Here's an example with many different parameters.
```javascript

var msg = {
	m: 'This is a Node.js test message',   // message
	t: "Node.js Test",                     // title
	s: '8',                                // sound (value 0-28)
	v: '2',                                // vibration (empty or value 1-3)
	i: '5',                                // icon (value 1-98)
	d: '221'                               // the device or device group id
};
```
## Examples

### Sending a message
```javascript

var push = require( 'pushsafer-notifications' );

var p = new push( {
	k: 'Your20CharPrivateKey',             // your 20 chars long private key
	debug: true
});

var msg = {
	m: 'This is a Node.js test message',   // message
	t: "Node.js Test",                     // title
	s: '8',                                // sound (value 0-28)
	v: '2',                                // vibration (empty or value 1-3)
	i: '5',                                // icon (value 1-98)
	d: '221'                               // the device or device group id
};

// console.log( p );

p.send( msg, function( err, result ) {
	//console.log( 'ERROR:', err );
	console.log( 'RESULT', result );
	// process.exit(0);
});

```