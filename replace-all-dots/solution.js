'use strict';

//Code Wars Replace All Dots

var replaceDots = function(str) {
  return str.replace(/\./g, '-');
};

//added escape before the period so it would not act as a special character

//added the g modifier to perform a global serach for all '.' and replace with '-'
