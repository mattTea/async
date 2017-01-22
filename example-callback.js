// var request = require('request');  // to use request module
// var url = 'http://api.openweathermap.org/data/2.5/weather?appid=404502e78f0cf783d14477e7343848be&q=London,uk&units=metric';

// lecture 39...
var weather = require('./weather.js');
// ./ means 'in the same directory' so can access any files in the same directory as this file (eg weather.js)
// this grabs the weather.js file and sets weather to whatever we set 'module.exports' in that file

weather(function (currentWeather) { // QUESTION: where is 'currentWeather' argument coming from?? -- this is what the function returns
	console.log(currentWeather);
});


// Moved request function below to weather.js so we can use module.exports to call it...

// request({  // object
// 	url: url,
// 	json: true
// }, function (error, response, body) {  // callback function taking 3 arguments
// 	if (error) {
// 		console.log('Unable to fetch weather.');
// 	} else {
// 		// console.log(JSON.stringify(body, null, 4)); // 4 is the number of spaces to indent your JSON by
// 		// It's 5.87 in London! (Use console.log to dig into a body and access body: main temp, and also access body: name)
// 		console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
// 	}
// });


