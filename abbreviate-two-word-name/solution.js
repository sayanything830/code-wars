'use strict';

// option one
function abbrevName(name){
  let arr = name.split(' '); // arr now represents an array of names given from fuction arguments
  return `${arr[0].charAt(0).toUpperCase()}.${arr[1].charAt(0).toUpperCase()}`; // takes first name in array and grabs the first character, then adds a period between the second name at first character. Each character is converted to upper case to pass the test.
}

// option two
function abbrevName(name){
  let nam = []; //empty array
  let arr = name.split(' '); // turn arguments into array of names
  for (var i = 0; i < arr.length; i++) { // for each name in arr
     nam.push(arr[i].charAt(0).toUpperCase()); // push the first letter to nam arr and convert it to upper case
  }
  return nam.join('.'); //return the letters in nam array joined by a period
}
