/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
   const numCount = new Map(); // Membuat Map untuk menghitung jumlah kemunculan setiap elemen

   for (const num of nums) {
      if (numCount.has(num)) {
         // Jika elemen sudah ada dalam Map, tambahkan hitungannya
         numCount.set(num, numCount.get(num) + 1);
      } else {
         // Jika elemen belum ada dalam Map, inisialisasi hitungannya menjadi 1
         numCount.set(num, 1);
      }

      // Jika hitungan elemen mencapai lebih dari setengah panjang array, itu adalah mayoritas
      if (numCount.get(num) > nums.length / 2) {
         return num;
      }
   }
}

console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
