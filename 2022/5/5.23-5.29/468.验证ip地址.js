/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  const IPv4Range = "(25[0-5]|2[0-4]\\d|1\\d{2}|[1-9]\\d|[0-9])";
  const patternIPv4 = new RegExp(`^(${IPv4Range}\\.){3}${IPv4Range}$`);
  if (queryIP.match(patternIPv4)) return "IPv4";

  const IPv6Range = "[0-9a-fA-F]{1,4}";
  const patternIPv6 = new RegExp(`^(${IPv6Range}:){7}${IPv6Range}$`);
  if (queryIP.match(patternIPv6)) return "IPv6";

  return "Neither";
};
// @lc code=end

let q = "192.168@1.1";
q = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";

// q = "2001:0db8:85a3::8A2E:037j:7334";
// q = "11.4.5.6";
let res = validIPAddress(q);

console.log(res);
