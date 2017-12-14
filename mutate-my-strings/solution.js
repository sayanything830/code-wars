'use strict';

// Mutate My Strings
function mutateMyStrings(stringOne, stringTwo){
  let arrOne = stringOne.split(''); // turn stringOne into an array
  let arrTwo = stringTwo.split(''); // turn stringTwo into an array
  let stringThree = ''; // empty string we'll be adding to for return
  for (var i = 0; i < arrOne.length; i++){ // for each letter in arrOne
    if((arrOne[i] != arrTwo[i])) { // if the letters are not the same
      stringThree = stringThree + arrOne.join('') + '\n'; // add that letter to the empty string plus the remainder of joined arrOne and add a new line
      arrOne[i] = arrTwo[i]; // the value of the matching index in arrOne is now assigned to arrTwo
    }
  }
  stringThree = stringThree + stringTwo + '\n' // stringThree is assigned it's own value plus stringTwo with line break
  return stringThree; // return the final version of stringThree
}
