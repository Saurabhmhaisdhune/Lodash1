
// Requiring the lodash library 
const _ = require("lodash"); 
      
// Original array 
var users = [
  { 'user': 'luv',
    'salary': 36000,
    'active': true },
  { 'user': 'kush', 
    'salary': 40000,
    'active': false }
];
  
// Using the _.filter() method
// The `_.matches` iteratee shorthand
let result = _.filter(users, 
    { 'salary': 36000, 'active': true }
);
  
// Printing the output 
console.log(result);

//CI = npm run build