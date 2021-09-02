/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  for (let i = 0; i < chars.length; ++i) {
    let start = i;
    let count = 0;
    ++i;
    while (i < chars.length && chars[start] === chars[i]) {
      ++i;
      ++count;
    }
    if (count) {
      chars.splice(start + 1, count, ...(count + 1 + '').split(''));
      i = start + (count + 1 + '').length;
    } else {
      --i;
    }
  }
  return chars;
};

let chars = ["a", "a", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]
// chars = ["a", "a", "a", "b", "b", "a", "a"]
// chars = ["a", "a", "a", "a", "a", "a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"]
chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
console.log(compress(chars))
