let arr = [0,1,2,3,4,5,6,7,8,9]

function isEven(numbers){
    if(numbers%2==0){
        return true
    }else{
        return false
    }
}

let evenArr = arr.filter(isEven)

console.log(evenArr)
