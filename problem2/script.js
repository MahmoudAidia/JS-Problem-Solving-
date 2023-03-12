/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (input) {
  // Taking the input and convert it to an array of its item
  let stringInput = String(input);
  let arrayStrings = Array.from(stringInput);

  // Preparing the index that will go from the right to left
  let j = arrayStrings.length - 1;

  // Looping over the array to compare each element from the left with each element form the write
  for (let i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i] !== arrayStrings[j]) {
      return false;
    }
    j--;
  }
  return true;
};

// let outCome = ;
console.log(isPalindrome(54555));
