//setTimeout(function () {  // setTimeout takes 2 argument - 1: callback function, 2: time to wait in milliseconds
//	console.log('1');
//}, 2000);

//setTimeout(function () {  // setTimeout takes 2 argument - 1: callback function, 2: time to wait in milliseconds
//	console.log('3');
//}, 1000);

//console.log('2');

console.log('CHALLENGE')

function printInTwoSeconds (message) {
	// setTimeOut 2000
	setTimeout(function () {
		console.log(message);
	}, 2000);
	// 	console to print message Var
}

printInTwoSeconds('Hello async!');