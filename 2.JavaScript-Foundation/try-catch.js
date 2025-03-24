try {
    console.log("This is try statement")
    console.log(a) // error
    
} catch (error) {
    console.log("Error caught")
    console.log("Error: "+error)
}finally{
    console.log("It always executes whether there was no error if there was an error.")
}


