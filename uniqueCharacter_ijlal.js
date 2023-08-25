/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
   // Create an array to keep track of characters that have been encountered
   const charMap = [];

   // Loop through each character in the string
   for (let i = 0; i < str.length; i++) {
      const char = str[i];

      // If the character has been encountered before, return false
      if (charMap[char]) {
         return false;
      }

      // Mark the character as encountered
      charMap[char] = true;
      console.log(charMap);
   }

   return true; // all of the characters is unique
}

console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
// console.log(hasUniqueCharacters("thelazydog")); // Output: true
