let grade = "w"

switch (grade) {
    case "A":
        console.log("Excellent")
        break;
    case "B":
        console.log("Great")
        break;
    case "C":
        console.log("Good")
        break;
    case "D":
        console.log("Average")
        break;
    case "E":
        console.log("Passed")
        break;
    case "F":
        console.log("Failed")
        break;
    default:
        console.log("The grade does not exist")
        break;
}

// the switch statement makes our code more readable and maintainable.
// In addition, switch is faster than long chains of if…else statements.

// Multiple case values
// Program to categorize age

let age = 19;

switch (age) {

    // when age is 13, 14, or 15
    case 13:
    case 14:
    case 15:
        console.log("Early Teen")
        break;

    // when age is 16 or 17
    case 16:
    case 17:
        console.log("Mid Teen");
        break;

    // when age is 18 or 19
    case 18:
    case 19:
        console.log("Late Teen");
        break;

    // when age is none of the above
    default:
        console.log("Other Age Group");
}