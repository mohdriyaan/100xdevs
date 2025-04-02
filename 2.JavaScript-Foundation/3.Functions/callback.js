const myFunc = (name) =>{
    console.log("Inside Func")
    console.log(`Hi, my name is ${name}`)
}

const myFunc2 = (callback) => {
    console.log("Inside Func2")
    callback("Riyaan")
}

myFunc2(myFunc)
