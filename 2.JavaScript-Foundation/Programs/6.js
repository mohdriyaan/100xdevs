// Program to Solve Quadratic Equation
let root1, root2

function quadEqn(a,b,c){
    // calclating discriminant
    let discriminant = b*b - 4*a*c

    // if discriminant > 0
    if(discriminant>0){
        root1 = (-b + Math.sqrt(discriminant)) / 2*a
        root2 = (-b - Math.sqrt(discriminant)) / 2*a
        return `The roots of the equation are ${root1} and ${root2}`
    }else if(discriminant==0){
        root1=root2= -b / 2*a
        return `The roots of the equation are ${root1} and ${root2}`        
    }else{
        let realPart = -b / 2*a
        let imgPart = (Math.sqrt(-discriminant) / 2*a).toFixed(2)
        return `The roots of the equation are ${realPart}+${imgPart}i and ${realPart}-${imgPart}i`        
    }
}

console.log(quadEqn(1,6,5))
console.log(quadEqn(1,-6,9))
console.log(quadEqn(1,-3,10))