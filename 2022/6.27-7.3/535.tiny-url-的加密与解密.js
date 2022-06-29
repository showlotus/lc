/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  this.dataBase = new Map()
  this.id = 0
  this.id++
  this.dataBase.set(this.id, longUrl)
  return `http://tinyurl.com/${this.id}`
}

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  const p = shortUrl.lastIndexOf("/")
  const id = shortUrl.substring(p + 1)
  return this.dataBase.get(Number(id))
}

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @lc code=end

var encode = function (longUrl) {
  this.dataBase = new Map()
  this.urlToKey = new Map()

  if (this.urlToKey.has(longUrl)) {
    return `http://tinyurl.com/${this.urlToKey.get(longUrl)}`
  }

  let hash = generateHash(longUrl)
  while (this.dataBase.has(hash)) {
    hash = (hash + 1) % (10 ** 9 + 7)
  }

  this.dataBase.set(hash, longUrl)
  this.urlToKey.set(longUrl, hash)
  return `http://tinyurl.com/${hash}`
}

function generateHash(str) {
  const K1 = 1117
  const K2 = 10 ** 9 + 7
  let key = 0
  let base = 1
  for (let s of str) {
    key = (key + s.codePointAt(0) * base) % K2
    base = (base * K1) % K2
  }
  return key
}

var decode = function (shortUrl) {
  const p = shortUrl.lastIndexOf("/")
  const key = shortUrl.substring(p + 1)
  return this.dataBase.get(Number(key))
}

console.log(generateHash("123"))
console.log(generateHash("124"))
console.log(generateHash("1251adas"))
