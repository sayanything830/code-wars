## Replace All Dots

This Code Wars practice is to take a string input and replace any periods '.' with hyphens '-'.

https://www.codewars.com/kata/fixme-replace-all-dots/javascript

My process to solve this problem as look up regular expressions on google. MDN states that the . character is special, and needs to be escaped in order to be used as a regular character. When running the sample test, this showed that the first period was properly replaced to a hyphen, but did not replace all periods. Further search on MDN's site showed that in order for the regular expression to do a global search, the g modifier needed to be used at the end of the expression.
