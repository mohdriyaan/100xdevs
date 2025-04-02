// The map() method creates a new array with the results of calling a function for every array element.

let numbers = [0,1,2,3,4,5,6,7,8,9,10]

function square(numbers){
    numbers = numbers * numbers
    return numbers 
}

let newArr = numbers.map(square)

console.log(newArr)