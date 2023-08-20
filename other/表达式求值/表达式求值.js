/**
 * 核心思想：
 * 如果后面的操作符的运算优化级比前面的操作符高，那么前面的操作符就必须延迟计算；
 * 如果后面的操作符优化级比前面的低或者相等，那么前面的操作符就可以进行计算了。
 */

/**
 * 计算表达式的值，只有 + 和 * 操作符
 * @param {string} str 表达式字符串，由数字和运算符（* 和 +）组成
 * @returns {number}
 */
function evalExpression(str) {
  // 运算符优先级
  const PRI = {
    "*": 0,
    "+": 1
  }
  const tokens = str.match(/\d+|[+*]/g)
  const numbers = []
  const operators = []
  const isOperator = s => /[+*]/.test(s)
  for (const s of tokens) {
    if (isOperator(s)) {
      // 如果栈顶操作符优先级大于等于当前操作符优先级，则先计算栈顶操作符
      while (
        operators.length &&
        PRI[operators[operators.length - 1]] <= PRI[s]
      ) {
        const top = operators.pop()
        let res
        if (top === "*") {
          res = numbers.pop() * numbers.pop()
        } else {
          res = numbers.pop() + numbers.pop()
        }
        // 将结果重新入栈
        numbers.push(res)
      }
      operators.push(s)
    } else {
      numbers.push(Number(s))
    }
  }

  if (operators[0] === "*") {
    return numbers[0] * numbers[1]
  } else {
    return numbers[0] + numbers[1]
  }
}

let str = "1+1*30+4"
str = "9*2+2*1"
str = "1+2+3+4"

const res = evalExpression(str)
console.log(res)
