function hello(){
    console.log("hello world")
}

// js function ==> function + object

// you can add your own properties to the function
hello.myOwnproperty = "cool boi"
console.log(hello.myOwnproperty)

// name property ===> tells function name

// every function has free space called prototype {}
// only functions provide prototype properties

hello.prototype.abc = "abc"
hello.prototype.num = 123
hello.prototype.xyz = function(){
    return "zyz"
}

console.log(hello.prototype)
