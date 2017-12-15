'use strict';

// Indexed Capitalization
function capitalize(s,arr){ //make a function
 let letters = s.split(''); //that splits letters s string into array
 for(let i = 0; i < letters.length; i++) { // for each index in letters array
   for(let j = 0; j < arr.length; j++) { // and for each number in arr array
       if(i === arr[j]) { // if index number of s matches value of number in arr
         letters[i] = letters[i].toUpperCase(); // the value of the index in letters array is changed to upper case
       }
   }
 }
   return letters.join('') // join letters array to become string

};
