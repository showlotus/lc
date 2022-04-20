/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  let res = []
  words.forEach(item => {
    let lines = keyboard.findIndex(key => key.indexOf(item[0].toLowerCase()) > -1)
    let i = 0
    while (i < item.length && keyboard[lines].indexOf(item[i].toLowerCase()) > -1) i++
    if (i === item.length) {
      res.push(item)
    }
  })
  return res
};

let words = ["Hello", "Alaska", "Dad", "Peace"]

words = ["adsdf", "sfd"]

console.log(findWords(words))
