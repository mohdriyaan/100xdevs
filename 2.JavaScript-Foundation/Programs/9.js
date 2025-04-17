function random(max,min){
    let result = Math.floor(Math.random()*(max-min)+min)
    return `The random number between ${min} and ${max} is ${result}`
}

console.log(random(100,1))



