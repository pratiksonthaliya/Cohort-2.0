/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let j = str.length - 1;
  let i = 0;
  while (i < j) {
    // skipping special character or spaces
    while (/[a-z]/.test(str[i]) === false) i++;
    while (/[a-z]/.test(str[j]) === false) j--;
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
