'use strict';

// Use .map() to double value in array
function double(array) { // create a function
    let array2 = array.map(x => x * 2); // assign new variable the value of the original array where each element is multiplied by two
    return array2; // return the new array
}
