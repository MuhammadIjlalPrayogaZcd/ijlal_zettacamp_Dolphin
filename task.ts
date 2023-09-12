function getCharacterCombination1(inputString: string, startIndex: number, endIndex: number): string {
   // Validate input indices
   if (startIndex < 0 || endIndex >= inputString.length || startIndex > endIndex) {
      throw new Error("Invalid input indices");
   }

   // Extract the desired substring
   const combination = inputString.substring(startIndex, endIndex);

   return combination;
}

// Example usage
const inputString2 = "Learning Typescript is different than Javascript";
const startIndex3 = 9;
const endIndex4 = 19;
const resulta = getCharacterCombination1(inputString2, startIndex3, endIndex4);
console.log(resulta); // Output: "Typescript"
