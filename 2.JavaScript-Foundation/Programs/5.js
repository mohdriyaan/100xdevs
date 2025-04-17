// swap variables

const swap = (num1,num2,temp) =>{
    // 1st method
    console.log("Before swap:- ", num1,num2)
    temp = num1
    num1 = num2
    num2 = temp
    console.log("After swap:", num1, num2);
    // 2nd method
    [num1, num2] = [num2, num1];
    console.log("Third swap:", num1, num2);
}

swap(10,2)


