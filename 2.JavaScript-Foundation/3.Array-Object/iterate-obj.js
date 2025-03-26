const obj={
    name:"Riyaan",
    age:24,
    address:"hyd"
}

for(let key in obj){
    console.log(`${[key]}: ${obj[key]}`)
}

console.log(Object.keys(obj))
console.log(Object.values(obj))