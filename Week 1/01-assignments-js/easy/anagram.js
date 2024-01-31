/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = new Map();
  for (const char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  for (const count of charCount.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
