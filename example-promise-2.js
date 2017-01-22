// function doWork (shouldFail) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			if (typeof shouldFail ==='boolean' && shouldFail === true) {
// 				reject('error message');
// 			} else {
// 				resolve('success');
// 			}
// 		}, 1000);
// 	});
// }

// doWork().then(function (message) {	// first thing that happens is doWork gets called, since we don't set shouldFail to true, it passes, message prints and it calls doWork again
// 	console.log(message);
// 	return doWork(true);				// this time doWork fails...
// }).then(function (message) {
// 	console.log(message);				// therefore this second success message doesn't print.
// }).catch(function (error) {			// anything in 'catch' gets called if any of the promises fail
// 	console.log(error);					// therefore the error message prints as the second message in the terminal
// });

function getLocation () {
	return new Promise(function (resolve, reject) {
		resolve('London');
	});
}

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		resolve("It's 78 in " + location + '!');
	});
}


// EXERCISE...

// inside of the 'then' callback for the success (first call to then) take location argument and pass into getWeather

// getLocation.then
//		return getWeather(location)
// then
// 		console.log(currentWeather [or whatever you decide to call the argument]);

getLocation().then(function (location) {	// gets called with whatever data is resolved - therefore a string which I'll reference as 'location'
	return getWeather(location);			// this is where data gets passed from one promise to another
}).then(function (currentWeather){			// then call that will fire when getWeather finishes (with the resolve string which I'll reference as 'currentWeather')
	console.log(currentWeather);
});