'use strict';

// Calculate Average

function find_average(array) { // make a function
  let reducer = (acc, curr) => acc + curr; // assign new variable the function of summing value of each element together
  return (array.reduce(reducer)/array.length); // return sum of array and divide by number of elements in array
}
