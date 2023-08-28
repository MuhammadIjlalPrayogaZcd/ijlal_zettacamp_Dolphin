/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containsDuplicate(nums) {
   const numSet = new Set(); // Membuat Set kosong untuk melacak nilai yang telah ditemukan

   for (const num of nums) {
      // Jika nilai num sudah ada dalam Set, artinya ada duplikat
      if (numSet.has(num)) {
         return true;
      }
      // Jika tidak, tambahkan num ke dalam Set
      numSet.add(num);
      // console.log(numSet);
   }

   return false; // Tidak ada duplikat ditemukan
}

// function containsDuplicate(nums) {
//    const numSet = []; // Membuat Set kosong untuk melacak nilai yang telah ditemukan

//    for (const num of nums) {
//       // Jika nilai num sudah ada dalam Set, artinya ada duplikat
//       if (numSet.includes(num)) {
//          return true;
//       }
//       // Jika tidak, tambahkan num ke dalam Set
//       numSet.push(num);
//       // console.log(numSet);
//    }

//    return false; // Tidak ada duplikat ditemukan
// }

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
console.log(containsDuplicate([-1, 0, 1, 2, 3])); // false
