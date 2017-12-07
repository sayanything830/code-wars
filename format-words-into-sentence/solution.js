'use strict';

// Format words into a sentence

function formatWords(words){ // make a function
  if (!words) return ''; // if the array is empty, return an empty string
  words = words.filter(word => word.length > 0); // reassign words to filter out any empty strings
  return `${words.slice(0,-2).join(', ')}${(words.length > 2 ? ', ' : '')}${ words.slice(-2).join(' and ')}`; // see below
}


// words.slice(0,-2).join(', ') words at index 0 to (words.length - 2) add a comma and space after the word and join them together

//(words.length > 2 ? ', ' : '') is the length of the array greater than 2? if so, add a comma and space, else leave it empty

//words.slice(-2).join(' and ') insert space_and_space before the last word in the string
