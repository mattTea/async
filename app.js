var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.option('location',  { // don't need command as only have one option for user entry (global level command)
		alias: 'l',
		demand: false,
		describe: 'Location to fetch weather for',
		type: 'string'
	})
	.help('help')
	.argv;


if (typeof argv.l === 'string' && argv.l.length > 0) {
	console.log('Location was provided.');
	weather(argv.l).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error);
	});
} else {
	console.log('Location was not provided.');
	location().then(function (location) {		// first we call the location Promise which resolves with the location object
		return weather(location.city);			// we take that location object, call weather with it, and then...
	}).then(function (currentWeather) {			// we wait for the weather function to return
		console.log(currentWeather);			// when it returns we simple print the current weather string
	}).catch(function (error) {					// if either of those calls to location or weather go bad, the error message prints to the screen
		console.log(error);
	});	
}

