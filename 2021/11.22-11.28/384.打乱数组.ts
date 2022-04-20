class Solution {
  sourceData: number[]

  constructor(nums: number[]) {
    this.sourceData = nums
  }

  reset(): number[] {
    return this.sourceData
  }

  shuffle(): number[] {
    let arr = []
    let data = this.sourceData.slice()
    while (data.length) {
      let random = Math.floor(Math.random() * data.length)
      arr.push(data[random])
      data.splice(random, 1)
    }
    return arr
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

let obj = new Solution([...new Array(10).keys()])
console.log(obj.reset())
console.log(obj.shuffle())
