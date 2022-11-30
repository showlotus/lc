/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  let vowels = ["a", "e", "i", "o", "u"];
  let len = sentence.length;
  let i = 0;
  let wordIdx = 0;
  let res = "";
  while (i < len) {
    let word = "";
    while (i < len && sentence[i] !== " ") {
      word += sentence[i];
      i++;
    }
    wordIdx++;
    if (vowels.includes(word[0].toLowerCase())) {
      res += word;
    } else {
      res += word.slice(1) + word[0];
    }
    res += "ma" + "a".repeat(wordIdx);
    if (i !== len) {
      res += " ";
    }
    i++;
  }
  return res;
};
// @lc code=end
var toGoatLatin_split = function (sentence) {
  let wordList = sentence.split(" ");
  let vowels = ["a", "e", "i", "o", "u"];
  let res = "";
  wordList.forEach((w, i) => {
    if (vowels.includes(w[0].toLowerCase())) {
      res += w;
    } else {
      res += w.slice(1) + w[0];
    }
    res += "ma" + "a".repeat(i + 1);
    if (i !== wordList.length - 1) {
      res += " ";
    }
  });
  return res;
};

var sentence = "I speak Goat Latin";
// sentence = "The quick brown fox jumped over the lazy dog";
// sentence = "w";
// sentence = "Each word consists of lowercase and uppercase letters only";
console.log(toGoatLatin(sentence) === toGoatLatin_split(sentence));
console.log(`${toGoatLatin(sentence)}_`);
console.log(`${toGoatLatin_split(sentence)}_`);
