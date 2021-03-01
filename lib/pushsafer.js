// Forked from and original created by: Copyright (c) 2012 Aaron Bieber <deftly@gmail.com>
// Modified by: (c) 2021 Kevin Siml Pushsafer.com

var https = require('https'),
    url = require('url'),
    qs = require('querystring'),
    p_url = 'https://www.pushsafer.com/api';

function Pushsafer(opts) {
    var self = this;
    this.k = opts.k;
    this.httpOptions = opts.httpOptions;

    if (opts.debug) {
	this.debug = opts.debug;
    }

    if (opts.onerror) {
	this.onerror = opts.onerror;
    }
}

Pushsafer.prototype.errors = function(d) {
    if (d && typeof d === 'string') {
	try {    
		d = JSON.parse(d);
	} catch (e) {
		console.error('Cannot parse error: ' + d);	
	}
    }

    if (d && d.errors) {
	if (this.onerror) {
	    this.onerror.call(null, d.errors[0]);
	} else {
	    throw new Error(d.errors[0]);
	}
    }
};

Pushsafer.prototype.send = function(obj, fn) {
    var self = this;
    var o = url.parse(p_url);
    o.method = "POST";

    var req_string = {
	k: self.k || obj.k
    };

    var p;
    for (p in obj) {
	req_string[ p ] = obj[p];
    }

    req_string = qs.stringify(req_string);

    o.headers = {
	'Content-Length': req_string.length,
	'Content-type': 'application/x-www-form-urlencoded',
    };

    var httpOpts = self.httpOptions;
    if (httpOpts) {
	Object.keys(httpOpts).forEach(function(key) {
	    o[key] = httpOpts[key];
	});
    }

    var req = https.request(o, function(res) {
	if (self.debug) {
	    console.log(res.statusCode);
	}
	var err;
	var data = '';
	res.on('end', function() {
	    self.errors(data);
	    if (fn) {
		fn.call(null, err, data);
	    }
	});

	res.on('data', function(chunk) {
	    data += chunk;
	});
    });

    req.on('error', function(err) {
	if (fn) {
	    fn.call(null, err);
	}
	// In the tests the "end" event did not get emitted if  "error" was emitted,
	// but to be sure that the callback is not get called twice, null the callback function
	fn = null;
    });


    if (self.debug) {
	console.log (req_string);
    }
    req.write(req_string);
    req.end();
};

exports = module.exports = Pushsafer;
