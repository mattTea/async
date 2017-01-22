// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) { // creating a new Promise and returning it so the user can use it
// 		setTimeout(function () {
// 			reject('everything is broken!');
// 		}, 1000);
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data) {   // first function is called is everything goes well
// 	console.log(data);
// }, function (error) {    // in order to catch the error (reject above) we have to add a second argument to 'then' 
// 	console.log(error);
// });

var request = require('request');

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=404502e78f0cf783d14477e7343848be&q=' + encodedLocation + '&units=metric';

		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	});
}

getWeather('san francisco').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});