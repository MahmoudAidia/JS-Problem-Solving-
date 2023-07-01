// /*

// The input could be:
//       - () {} []
//       - ({[]})

// */

// let isValid = function (s) {
//   // If the length of the string is odd number this means that the string is {}[ or (){ and so on
//   if (s.length % 2 !== 0) {
//     return false;
//   } else if (s.length >= 2) {
//     for (let i = 0; i < s.length; i + 2) {
//       if (s[i] === "(") {
//         if (s[i + 1] === ")") {
//           return true;
//         } else {
//           return false;
//         }
//       } else if (s[i] === "[") {
//         if (s[i + 1] === "]") {
//           return true;
//         } else {
//           return false;
//         }
//       } else if (s[i] === "{") {
//         if (s[i + 1] === "}") {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return false;
//       }
//     }
//   }
//   // else if (s.length >= 2) {
//   // }
//   let result = true;
//   let j = s.length;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[j] && i !== j) {
//       result = result & true;
//     }
//     if (i === s.length - 1) {
//       return result;
//     }
//     j--;
//   }
// };

// console.log(isValid("{()}"));

// let test = true;
// console.log(test & true);
