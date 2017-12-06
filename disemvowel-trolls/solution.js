'use strict';

function disemvowel(str) { // create a function that takes an argument (a string)
  return str.replace(/[aeiou]/gi, ''); // see below
};

// /[aeiou]/ - match all vowels in string
// gi - regex modifiers to look through entire string and ignore case sensitivity
// '' - replace with empty string (remove what is matched)
