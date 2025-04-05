const obj = {
    key1:"value1",
    key2:"value2",
    about(){
        console.log(this.key1,this.key2)
    }
}

obj.about()