/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //converting back to string only b/c arrays in js are compared based on their reference/address -> not by there value
  // split -> strings to arrays
  // join -> arrays to strings

  let arr1 = str1.toUpperCase().split("").sort().join("");
  let arr2 = str2.toUpperCase().split("").sort().join("");
  console.log(arr1, arr2);
  return arr1 === arr2;
}

module.exports = isAnagram;
