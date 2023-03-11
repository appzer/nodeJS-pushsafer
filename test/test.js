var push = require( 'pushsafer-notifications' );

var p = new push( {
	k: 'Your20CharPrivateKey',		// your 20 chars long private key or 15 chars long alias key
	debug: true
});

var msg = {
	m: 'This is a Node.js test message',	// message
	t: "Node.js Test",		        // title
	s: '8',				        // sound (value 0-28)
	v: '2',				        // vibration (empty or value 1-3)
	i: '5',			                // icon (value 1-98)
	c: '#FF0000',				// icon color (optional)
	d: '221',	                        // the device or device group id
	l: '10',	                        // Time to Live in minutes
	pr: '2',                                // Priority (optional: -2, -1, 0, 1, 2)
	re: '60',                               // Retry (optional: 60-10800 seconds)
	ex: '60',                               // Expire (optional: 60-10800 seconds)
	cr: '20',                               // Confirm (optional: 10-10800 seconds)
	a: '1',				        // Answer
	ao: 'yes|no|maybe',		        // Answer Options
	af: '1',			        // Force Answer
	p: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSW1hZ2VSZWFkeTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KKS7NPQAAByJJREFUSA2NVvmPHEcZfd3T3TN72d5de4/Ya8dnLjveJAomOARBYqQ4gJQgMBKKhYRAQvwCQvwZyIYoCMFPsZCREqEgwDIiNiiAcwkvxl587GY23tOeydp7zux0Tx+8Vz29FwZR9mxVV33fe99Z3VYYhgnWjzgGbBtJLrfmxEooqrP1Q7KWtWbXiqJUlmfrhxMTJBGYlDgLOPE882zNz8EqTcEq34Y1M434gf2Idz8IK6xDloomcVzYxRuwr19BsqkTSVcvku77EG/caAy3giA1qIEvA5xIFmmIWFO+AGthHs7Ae7D/+T7BCd2xBXFTM+Io5o/y+mUg8oT7qNVgfTQEa+ACbGLFj34C4RNPIWndAMuvGWyjw5W1uLhItsb/QgG58VF4vzmFxM0jPHwE0a59SGi18SymCdVKSpjCGGOT5hYktmU8V3RyI8NwLrxFsiUELx5H1Hc/LBplBo215ubmGE/+J6F7s4jCqRMIDh9F8MwRxK2tUHhy5RLs2TuIN7Qj7uhcm1d6as/c4fkM4vYORFt6GC0PdqUC76/n4P3ld6gd/z7qO/ekxCR1IuWHIc2VbiF/+lXUPvsilkiogvGuDiL/wduw75aYFxvBp55D2N7JnIYrOWX+87cm4Moz6sQdXfAPfQYBIxR+7ihiL29ww2/+EOHmLhNqa/rujElb65u/ZIZdLHz5OAkjNA28j8IfX0fw2DMIHjpIr9uMcbHjQPVo52zaRRLG3aYRyptdWYB37TK8gbdRO/IVLD3+SYAd0Cbs2hIWX3qZmvRUIPmRIeZyGAvHv4eIQs2XL6Jw9jQqL30LtYcfNRVtWiUK4anIqRoEXHsO1FSBzWpnoaFjM/ztu1DYvhstv/658bL6+CFUnz6CttdOwh0dgb/7ATgJrXSHBhHu3g+/uxcu26Pw599i6fPHUN3fj9ziAtRzInJcF+XZBZz/2yCGRj/Gvh2b8ezhA9jc3obQr5hCkmfVRw7CqnzN4ARbt8NnGxX2HoB74wpqO3bBtpaqsEuTCHbuM156H15jKDeh+hA9rFYBGhUy+TYJ5xareOXUeXznG+dx4uwI5z/h5GvnMMt9nUtO8qrwpQcPsPA64A0Tj6kI7t8HuzxpMG2rsgj7zm3U2diqVGdsBFFPHyIWF+oBItqvS8Bzc7g2PIFXXr2OLV/oxJ7eJvR8sRM//fF1XL0xZs4lR0rq1RF5BYS92+GMFwHfNwVo3y2TlHwJiyHq2oqo0MTk+IjZc/XOLewiNjjPhJGjpYM3RvGrs/8AHmlCi2Nh1I9QyPHwsRbuX8KV6zeNnJzNbrlQl0pzqwrAOBF190F81tTERGKz8mJ6lqjndHtwjl0WB4ld18HFy0U8/6O3gLKPvm3NmAgiuESv83ybl8P4JNPQmceZHzyHJ/v30NHQXCA2I6UCFLaVxLB5QWhtx1JuaYVmCcjjiIS67kQ4PDKFr544B0wHLJwWTJLQoyylzaznvX0twEyAFyg3VJw0etIXjvDkHf1b5jHhNZeyDmg5eFnELAaFtFqt4Y0/DGBhpIq99HCsFiEn41YNPY8z1DrH6BJePzuACvWkLxzlV6kyYdXlTx7ezcwdQcyB1uQVucPS/2ishJPvjANb86jwUg94tvZllz4HlK+ERLmvgJ+8M4GR0dtGXzhrsBs85mUnQo2MWL5EtKg4VgY+DtDEvPnUlnAqKel06Nlm6HTe4lFi2kdxtEx91f0KZoat2Xi6ekNrDRVD6c4Cw51gA6tU3vBFcs+hfZ/nbapmvvWkV6+vkMrUjEMAhlSLjCybVfYBFTXkocL+v4a5gxtG+Swu0zZUSMlWNPXsZCTZdiokhhWWlVUmde+5ESRzmOFm82qNe5CueG14/0tIV4MsryVr5NNwapkastbs5fAuKzY8XPG4gfN/kGcimccp1VpC8Tj6szoEWmf5MC1JHX0vRo0fb8D/GDqTbPZdqbUwLC5WY2eKhjR7yGbXYTdKUSbnLbSzFQpEDvk8R+Q6BdWvKjOXvw7XMpdGC6u3TFnp6TYTud6768c9SQO2y4c3SzhzcVK9gKFZ3qEBG5FuNjU7hojbssck49Y8zZCb6lPK/X5gCp9+YgJ7d/as5zPPVrFYpHQaYlsXPcNy4e9D+MWZQcwshWh2+SFNCfVipR7jX4t1dHPPZ4/kuVni3sOtLlq5p7aRd1XubSw4+PYL+/H0k3yPNnAVbo1VpKmCNqfvzqPm15H3XHqie5O9xZBr72dvvIfTb46j/1A7Ln0wg2Nf2obvHnsKTXkX9ZAXAg3RP59hLeQddPKrIs3tCv5yeBtGiBO93R20zqLXJgim7qWoj7GvP9+Pd2/O4dLVefQd3ICXj/Zj946etPgUkgZQpm9ec8Rcjb/sqWFr/DEFJIC06cyuPLapqbfH7fIspkoz6O3aRAPb+cGfvqHSF16GlOqLfP34N8qH9ZW2gpSZAAAAAElFTkSuQmCC',
						// Image converted to > Data URL with Base64-encoded string
	p2: '',                                 // Image 2 converted to > Data URL with Base64-encoded string
	p3: ''                                  // Image 3 converted to > Data URL with Base64-encoded string
};

// console.log( p );

p.send( msg, function( err, result ) {
	//console.log( 'ERROR:', err );
	console.log( 'RESULT', result );
	// process.exit(0);
});
