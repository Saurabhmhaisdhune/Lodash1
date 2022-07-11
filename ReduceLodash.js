// Requiring the lodash library
const _ = require("lodash");
	
// Original array
var users = [ 1, 2, 3, 4 ];

// Use of _.reduce() method

let result = _.reduce(users, function(sum, n) {
return sum + n;
}, 0);

// Printing the output
console.log(result);
