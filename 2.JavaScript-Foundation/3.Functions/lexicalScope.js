const app = () => {
    const num = 10

    const myFunc= () => {
        const num = 20
        console.log(`myFunc : ${num}`)
        const myFunc2 = () => {
            const num = 0
            console.log(`myFunc2 : ${num}`)
        }
        myFunc2()
    }
    
    console.log("myApp")

    console.log(num)

    myFunc()
}

app()