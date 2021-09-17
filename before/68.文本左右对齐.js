/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let res = []
  let i = 0
  while (i < words.length) {
    let lineNum = 0
    let lineStart = i
    do {
      lineNum += words[i].length + 1; /* 多加一个为空格 */
      ++i
    } while (lineNum <= maxWidth && i < words.length)
    if (lineNum - 1 > maxWidth) {
      --i
      lineNum -= words[i].length
    }
    // 单词分行
    let target = words.slice(lineStart, i)
    let targetLen = target.reduce((prev, curr) => prev + curr.length, 0)

    // 计算填充空格长度
    let str = ''
    let spaceLenSum = maxWidth - targetLen
    if (i < words.length) {
      /* 前 n-1 行，单词两端对齐 */
      let spaceNum = target.length - 1
      str = target.reduce((prev, curr) => {
        /* 每次计算剩余插入空间中，能放下最大的空格数 */
        let spaceLen = Math.ceil(spaceLenSum / spaceNum);
        spaceLenSum -= spaceLen;
        --spaceNum;

        if (prev.length + spaceLen + curr.length <= maxWidth) {
          return prev + ' '.repeat(spaceLen) + curr;
        } else {
          return prev + ' '.repeat(spaceLen - 1) + curr;
        }
      })
    } else {
      /* 最后一行，靠左对齐 */
      str = target.join(' ')
    }

    // 最后一行长度不够的，后方补充空格
    str = str.padEnd(maxWidth, ' ')
    res.push(str);
  }
  return res
};

let words = ["This", "is", "an", "example", "of", "text", "justification."]
// words = ["ask", "not", "what", "your", "country", "can", "do", "for", "you", "ask", "what", "you", "can", "do", "for", "your", "country"]
const maxWidth = 16

console.log(JSON.stringify(fullJustify(words, maxWidth), null, 2))
