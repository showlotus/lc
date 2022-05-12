/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  const getLogType = log => {
    let isWord = /^[a-zA-Z0-9]+((\s[a-z]+)+$)/.exec(log);
    let isNumber = /^[a-zA-Z0-9]+((\s[0-9]+)+$)/.exec(log);
    if (isWord) {
      return {
        type: "word",
        content: isWord[1].trim(),
      };
    } else {
      return {
        type: "number",
        content: isNumber[1].trim(),
      };
    }
  };

  const isNumber = typeObj => {
    return typeObj.type === "number";
  };

  const isWord = typeObj => {
    return typeObj.type === "word";
  };

  logs.sort((a, b) => {
    const A = getLogType(a);
    const B = getLogType(b);
    if (isWord(A)) {
      if (isNumber(B) || (isWord(B) && B.content > A.content)) {
        return -1;
      } else if (B.content === A.content) {
        return b > a ? -1 : 1;
      }
    }
    return 1;
  });
  return logs;
};
// @lc code=end

var logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"];
logs = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"];
logs = ["a2 9", "g2 3", "g3 i"];
logs = ["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo", "a2 act car"];
console.log(reorderLogFiles(logs));
