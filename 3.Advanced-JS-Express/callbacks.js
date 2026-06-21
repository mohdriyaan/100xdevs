function square(num){
  return num * num
}

function cube(num){
  return num * num * num
}

function quad(num){
  return num * num * num * num;
}

function sumOfSomething(a,b,fn){
  const num1 = fn(a)
  const num2 = fn(b)
  return num1 + num2

  // This also works same.
  // const num1 = square(a)
  // const num2 = square(b)
  // return num1 + num2
}

const ans = sumOfSomething(2,2,square)
console.log(ans)

