const person = {
    name:"Riyaan",
    age:24
}

const getDetails = (obj) =>{
    console.log(obj.name)
    console.log(obj.age)
}

const getDetails2 = ({name}) => {
    console.log(name)
}

getDetails(person)
getDetails2(person)