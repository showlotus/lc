/*
 * @lc app=leetcode.cn id=423 lang=typescript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
function originalDigits(s: string): string {
  //   zero: 0 /* z */,
  //   one: 1 /* o - z - w - u */,
  //   two: 2 /* w */,
  //   three: 3 /* r - z - u */,
  //   four: 4 /* u */,
  //   five: 5 /* f - u */,
  //   six: 6 /* x */,
  //   seven: 7 /* s - x */,
  //   eight: 8 /* g */,
  //   nine: 9 /* i - x - g */,
  let res: number[] = [];
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  res[0] = map.get("z") || 0;
  res[2] = map.get("w") || 0;
  res[4] = map.get("u") || 0;
  res[1] = Math.max((map.get("o") || 0) - res[0] - res[2] - res[4], 0);
  res[3] = Math.max((map.get("r") || 0) - res[0] - res[4], 0);
  res[5] = Math.max((map.get("f") || 0) - res[4], 0);
  res[6] = map.get("x") || 0;
  res[7] = Math.max((map.get("s") || 0) - res[6], 0);
  res[8] = map.get("g") || 0;
  res[9] = Math.max((map.get("i") || 0) - res[6] - res[8] - res[5], 0);
  let str: string = "";
  res.forEach((item, i) => {
    if (item) {
      str += String(i).padStart(item, i.toString());
    }
  });
  return str;
}
// @lc code=end

let s = "owozotenerzoer";
s = "fviefuro";
s = "zeroonetwothreefourfivesixseveneightnine";
console.log(originalDigits(s));
