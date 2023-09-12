function getCharacterCombination(inputString: string, startIndex: number, endIndex: number): string {
   // Validate input indices
   if (startIndex < 0 || endIndex >= inputString.length || startIndex > endIndex) {
      throw new Error("Invalid input indices");
   }

   // Extract the desired substring
   const combination = inputString.substring(startIndex, endIndex);

   return combination;
}

let inputString = document.getElementById("inputString")! as HTMLInputElement;
let startIndex = document.getElementById("startIndex")! as HTMLInputElement;
let endIndex = document.getElementById("endIndex")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLButtonElement;

button.addEventListener("click", function () {
   console.log(getCharacterCombination(inputString.value, +startIndex.value, +endIndex.value));
});

// export {};
