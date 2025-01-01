//  The date is a class that is used to create instances of objects.

const currentDate = new Date()
console.log(currentDate.getMonth() + 1) // It returns 11 because it is at zero index. So we use + 1 to get actual month.
console.log(currentDate.getDate()) 
console.log(currentDate.getFullYear()) 

console.log("Date:", currentDate.getDate());
console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
console.log("Year:", currentDate.getFullYear());
console.log("Hours:", currentDate.getHours());
console.log("Minutes:", currentDate.getMinutes());
console.log("Seconds:", currentDate.getSeconds());

// Setting components of the date
currentDate.setFullYear(2022);
console.log("After setFullYear:", currentDate);

currentDate.setMonth(5); // Setting month to June (zero-indexed)
console.log("After setMonth:", currentDate);

// Getting and setting time in milliseconds since 1970
console.log("Time in milliseconds since 1970:", currentDate.getTime());

const newDate = new Date(2023, 8, 15); // Creating a new date
console.log("New Date:", newDate);
 