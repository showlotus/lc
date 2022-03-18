/*
 * @lc app=leetcode.cn id=2043 lang=javascript
 *
 * [2043] 简易银行系统
 */

// @lc code=start
/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.map = new Map()
  balance.forEach((v, i) => {
    this.map.set(i + 1, v)
  })
}

/**
 * @description 转账
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (!this.map.has(account1) || !this.map.has(account2) || this.map.get(account1) < money) {
    return false
  }
  if (account1 === account2) return true
  let a1 = this.map.get(account1)
  let a2 = this.map.get(account2)
  this.map.set(account1, a1 - money)
  this.map.set(account2, a2 + money)
  return true
}

/**
 * @description 存款
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (!this.map.has(account)) return false
  let a = this.map.get(account)
  this.map.set(account, a + money)
  return true
}

/**
 * @description 取款
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  let val
  if (!this.map.has(account) || (val = this.map.get(account)) < money) {
    return false
  }
  this.map.set(account, val - money)
  return true
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
// @lc code=end

var ops = ["Bank", "withdraw", "transfer", "deposit", "transfer", "withdraw"]
var data = [[[10, 100, 20, 50, 30]], [3, 10], [5, 1, 20], [5, 20], [3, 4, 15], [10, 50]]

ops = ["Bank", "deposit", "transfer", "transfer"]
data = [[[0]], [1, 2], [1, 1, 1], [1, 1, 3]]

var res = []
var b
ops.forEach((o, i) => {
  switch (o) {
    case "Bank":
      b = new Bank(data[0][0])
      res.push(null)
      break
    default:
      res.push(b[o](...data[i]))
      break
  }
  console.log(res, b.map)
})
console.log(res)
