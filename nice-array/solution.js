'use strict';

// Nice Array
function isNice(arr){ // make a function called isNice
  if (arr.length == 0) { // if the array is empty
    return false; // it is not a nice array
  };
  for (var i = 0; i < arr.length; i++) { // for each index in the array
    if (!arr.includes(arr[i] + 1) && !arr.includes(arr[i] - 1)) { // if the array does not include an element with the value of current index + 1 AND - 1
      return false; // it is not a nice array
    };
  };
  return true; // otherwise it is a nice array
};
