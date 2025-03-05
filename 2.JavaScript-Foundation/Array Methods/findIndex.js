// function that returns even number
function isEven(element) {
    return element % 2 == 0;
  }
  
  // defining an array of integers
  let numbers = [1, 45, 8, 98, 7];
  
  // returns the index of the first even number in the array
  let firstEven = numbers.findIndex(isEven);
  
  console.log(firstEven); // 2

  // defining an array
let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// returns the first index of 'Wednesday' in the array
let index = days.findIndex((day) => day === "Wednesday");

console.log(index); // 1

// defining an object 
const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  // function that returns age greater than or equal to 18
  function isAdult(member) {
    return member.age >= 18;
  }
  
  // returns the index of the first element which is 
  // greater than or equal to 18  
  console.log(team.findIndex(isAdult)); // 2
