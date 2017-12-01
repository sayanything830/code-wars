'use strict';

// Simple Validation of a Username with Regex

function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username); // see comments below
  return res;
};

// This regular expression knows to start at the beginning of the username with ^

// It then matches lowercase letters from a to z
// Followed by numbers 0-9
// Followed by underscores

//{} set the parameters of how many characters to allow, in this case 4 to 16

// It also knows to check the end of the username with $

// .test(username) was included in code wars code
