/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function (input) {
  let list = Array.from(input);
  console.log(list);
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === "I" && list[i + 1] === "V") {
      sum += 4;
      i++;
    } else if (list[i] === "I" && list[i + 1] === "X") {
      sum += 9;
      i++;
    } else if (list[i] === "X" && list[i + 1] === "L") {
      sum += 40;
      i++;
    } else if (list[i] === "X" && list[i + 1] === "C") {
      sum += 90;
      i++;
    } else if (list[i] === "C" && list[i + 1] === "D") {
      sum += 400;
      i++;
    } else if (list[i] === "C" && list[i + 1] === "M") {
      sum += 900;
      i++;
    } else if (list[i] === "I") {
      sum += 1;
    } else if (list[i] === "V") {
      sum += 5;
    } else if (list[i] === "X") {
      sum += 10;
    } else if (list[i] === "L") {
      sum += 50;
    } else if (list[i] === "C") {
      sum += 100;
    } else if (list[i] === "D") {
      sum += 500;
    } else if (list[i] === "M") {
      sum += 1000;
    }
  }
  console.log(sum);
};

romanToInt("LVIII");
