// Arrow Functions

const printHelloWorld = () =>{
    console.log("Hello World")
}

printHelloWorld()

const firstChar = (string) => {
    return string[0]
}

console.log(firstChar("hello"))

const isPresent= (array,target)=>{
    for(let i=0;i<=array.length-1;i++){
        if(target===array[i]){
            return `${target} found in array. Index number is ${i}`
        }
    }
    return `${target} Not found in array`
}


const array = [10,1,2,4,5]

console.log(isPresent(array,20))
