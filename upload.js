var Flickr = require('flickr-sdk');

/**
 * This example demonstrates how to use the Upload API.
 * https://www.flickr.com/services/api/upload.api.html
 */

// uploads require auth with "write" perms. for this example, we'll use
// oauth as the authentication method. first, sign up for an application
// to get a consumer key and secret and use the oauth flow to obtain an
// oauth token and secret.
// https://www.flickr.com/services/apps/create/apply/?

var auth = Flickr.OAuth.createPlugin(
	"027ffc6fd131e0e707822cf444bf1dc3",
	"90b8a2a2628e3954",
	"72157671386449268-709982f3d497c64f",
	"8542dd81e8b40314"
);

// create a new upload instance. the photo param can be anything
// that superagent accepts.

var upload = new Flickr.Upload(auth, __dirname + '/qe.jpg', {
	title: 'Works on MY machine!'
});

// this is a request instance, so we can just call .then()
// to kick off the request.

upload.then(function (res) {
	console.log('res', res.body);
}).catch(function (err) {
	console.log('err', err);
});
