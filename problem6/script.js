// for (let i = 0; i <= 5; i++) {
//   console.log(i * 2);
// }

// let innerResult = [];
// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j <= 12; j++) {
//     let result = i * j;
//     innerResult.push(result);
//     console.log(`The result of ${i}*${j} = `, innerResult[j]);
//   }
//   innerResult = [];
//   console.log("----------------------------------");
// }

// let myList = [];
// let sum = 0;
// for (let counter = 0; counter < 10; counter++) {
//   myList[counter] = Math.ceil(Math.random() * 10);
// }
// console.log(myList);

// for (let counter = 0; counter < 10; counter++) {
//   sum += myList[counter];
// }
// console.log(sum);

// function reverseArray(array) {
//   let j = array.length - 1;

//   for (let i = 0; i < array.length; i++) {
//     if (i !== j || i > j) {
//       let temp = array[i];
//       // console.log(temp);
//       // console.log(j);
//       array[i] = array[j];
//       array[j] = temp;
//       j--;
//     } else {
//       console.log(array);
//     }
//   }
// }

// let array = [1, 2, 3, 4, 5, 6, 7];

// reverseArray(array);

// function sort(list) {
//   console.log("not sorted", list);
//   for (let j = 0; j < list.length; j++) {
//     for (let i = 0; i < list.length - 1; i++) {
//       small = list[i];
//       if (list[i + 1] < small) {
//         small = list[i + 1];
//         list[i + 1] = list[i];
//         list[i] = small;
//       }
//     }
//   }
//   console.log("sorted", list);
// }
// let small;
// let temp;
// let list = [];
// for (let i = 0; i < 20; i++) {
//   list.push(Math.ceil(Math.random() * 10));
// }
// sort(list);

// function filterNegativeNumbers(numbers) {
//   console.log(numbers);
//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] < 0) {
//       numbers.splice(i, 1);
//       i--;
//     }
//   }
//   console.log(numbers);
// }

// let numbers = [-5, 3, -90, -2, 36, 5, 8, 95];
// filterNegativeNumbers(numbers);

// function removeSpacesInString(text) {}

// let text = "mahmoud    aidia";

// removeSpacesInString(text);

// function counterVowels(word) {
//   let numberOfVowels = 0;
//   let result = [];
//   let ArrayWord = Array.from(word);
//   // console.log(ArrayWord);
//   for (let i = 0; i < ArrayWord.length - 1; i++) {
//     if (
//       ArrayWord[i] === "a" ||
//       ArrayWord[i] === "e" ||
//       ArrayWord[i] === "i" ||
//       ArrayWord[i] === "o" ||
//       ArrayWord[i] === "u"
//     ) {
//       // console.log(`The vowels in ${word} are ` + ArrayWord[i]);
//       result.push(ArrayWord[i]);
//       numberOfVowels++;
//     }
//   }
//   console.log("The number of vowels is " + numberOfVowels);
//   console.log("The vowels are " + result);
// }

// let word = "mahmoud aidia";

// counterVowels(word);
// // console.log(word);
