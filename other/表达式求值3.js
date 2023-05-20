/**
 * 计算表达式的值，操作符有四种 + - * / ( )
 * @param {string} str 表达式字符串，由数字和运算符（+、-、*、/、(、)）组成
 * @returns {number}
 */
function evalExpression(str) {
  // 运算符优先级，数字越小优先级越高
  const PRI = {
    "(": -Infinity,
    "*": 0,
    "/": 0,
    "+": 1,
    "-": 1,
    ")": Infinity
  }
  const isOperator = s => /[+\-*/()]/.test(s)
  const computed = (operator, n1, n2) => {
    const ops = {
      "*": () => n1 * n2,
      "/": () => n1 / n2,
      "+": () => n1 + n2,
      "-": () => n1 - n2
    }
    return ops[operator]()
  }
  const handler = (numbers, operators) => {
    const operator = operators.pop()
    const n2 = numbers.pop()
    const n1 = numbers.pop()
    // 将结果重新入栈
    numbers.push(computed(operator, n1, n2))
  }

  const tokens = str.match(/\d+|[+\-*/()]/g)
  const numbers = []
  const operators = []
  for (const s of tokens) {
    if (isOperator(s)) {
      // 如果栈顶操作符优先级大于等于当前操作符优先级，则先计算栈顶操作符
      while (
        operators.length &&
        operators[operators.length - 1] !== "(" &&
        PRI[operators[operators.length - 1]] <= PRI[s]
      ) {
        handler(numbers, operators)
      }

      if (
        operators.length &&
        operators[operators.length - 1] === "(" &&
        s === ")"
      ) {
        operators.pop()
      } else {
        operators.push(s)
      }
    } else {
      numbers.push(Number(s))
    }
  }

  while (operators.length) {
    handler(numbers, operators)
  }
  return numbers[0]
}

let str = "1+1*30-4/2"
// str = "9*2+2*1"
// str = "1+2+3+4"
str = "10*2/1*6"
str = "2*(2+3)-(6-2)*2"
str = "2*(5-(2+(2-1)))"
str = "((11+33)/11-2*4)*(8-3)"

const res = evalExpression(str)
console.log(res)
