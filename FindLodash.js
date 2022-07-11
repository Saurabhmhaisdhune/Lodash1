
const _ = require('lodash');
 
let x = [2, 5, 7, 10, 13, 15];
 
let result = _.find(x, function(n) {
    if (n * n > 100) {
        return true;
    }
});
 
console.log(result);