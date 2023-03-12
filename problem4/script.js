/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  [word1, word2, word3] = strs;

  let prefix = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (k = 0; j < 10; j++) {
        if (word1[i] === word2[j] && word1[i] === word3[k]) {
          prefix.push(word1[i]);
        }
      }
    }
    prefix.push("");
  }
  for (let i = 0; i < prefix.length; i++) {
    console.log(prefix[i]);
  }
};

longestCommonPrefix("flower", "flow", "flo");
