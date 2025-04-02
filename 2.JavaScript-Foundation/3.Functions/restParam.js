
const add=(...a)=>{
    let sum=0 
    for(let i=0;i<=a.length-1;i++){
        sum+=a[i]
    }
    return sum
}

console.log(add(1,10,2,3,4))