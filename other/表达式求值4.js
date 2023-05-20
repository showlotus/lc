/**
 * 计算表达式的值，操作符有两种 $ 和 @
 * @param {string} str 表达式字符串，由数字和运算符（$、@）组成，@ 优先级高于 $
 * x@y: 2 * x + 3 * y - 1
 * x$y: 3 * (x + 1) - y
 * @returns {number}
 */
function evalExpression(str) {
  // 1. 定义操作符优先级，数字越小优先级越高
  const PRI = {
    "@": 0,
    $: 1
  }

  // 2. 定义一个方法，判断是否是操作符
  const isOperator = s => /[@$]/.test(s)

  // 3. 定义计算规则
  const calc = (operator, n1, n2) => {
    const ops = {
      "@": () => 2 * n1 + 3 * n2 - 1,
      $: () => 3 * (n1 + 1) - n2
    }
    return ops[operator]()
  }

  // 4. 封装方法处理数字栈和操作符栈
  const handler = (numbers, operators) => {
    const operator = operators.pop()
    const n2 = numbers.pop()
    const n1 = numbers.pop()
    // 将结果重新入栈
    numbers.push(calc(operator, n1, n2))
  }

  // 5. 获取所有 token，并定义两个栈，数字栈和操作符栈
  const tokens = str.match(/\d+|[@$]/g)
  const numbers = []
  const operators = []

  // 6. 遍历 tokens
  for (const s of tokens) {
    if (isOperator(s)) {
      // 6.1 如果栈顶操作符优先级大于等于当前操作符优先级，则先计算栈顶操作符
      while (
        operators.length &&
        PRI[operators[operators.length - 1]] <= PRI[s]
      ) {
        handler(numbers, operators)
      }
      // 6.2 将当前操作符入栈
      operators.push(s)
    } else {
      // 6.3 将当前数字入栈
      numbers.push(Number(s))
    }
  }

  // 7. 处理操作符栈中剩余的操作符
  while (operators.length) {
    handler(numbers, operators)
  }

  // 8. 返回计算结果
  return numbers[0]
}

let str = "1@1$30@4$2"

const res = evalExpression(str)
console.log(res)
