// function inside function

const app = () => {
    
    const myFunc = ()=>{
        console.log("Hello from myFunc function")
    }

    const sum = (num1,num2) =>{
        return num1+num2
    }
    
    console.log(sum(4,5))

    console.log("inside app")

    myFunc()
}

app()