var Flickr = require('flickr-sdk');
var flickr = new Flickr("027ffc6fd131e0e707822cf444bf1dc3");

flickr.photos.getInfo({
  photo_id: 25825763 // sorry, @dokas
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});