'use strict';

// List Filtering
function filter(l) { // make a function
  let newArr = l.filter(n =>  { //assign new variable to the filtered array
    return typeof n === "number"; //that only passes integers into new array by checking to see what their data type is
  });
  return newArr; //return new array
}
