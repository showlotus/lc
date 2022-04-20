/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  let res: number[] = [];
  let slen = s.length;
  let plen = p.length;
  if (slen < plen) return [];
  let sCnt = new Array(26).fill(0);
  let pCnt = new Array(26).fill(0);
  for (let i = 0; i < plen; i++) {
    sCnt[s[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    pCnt[p[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  let left = 0;
  let right = left + plen - 1;
  while (right < s.length) {
    /* 更新滑动窗口字母的频次 */
    if (left !== 0) {
      sCnt[s[left - 1].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
      sCnt[s[right].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    if (isSameString(sCnt, pCnt)) {
      res.push(left);
    }
    left++;
    right++;
  }
  return res;
}

function isSameString(a: number[], b: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
// @lc code=end

let s = "cbaebabacd",
  p = "abc";

(s = "abab"), (p = "ab");
console.log(findAnagrams(s, p));
