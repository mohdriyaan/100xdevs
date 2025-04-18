// Program to Print All Prime Numbers in an Interval
function findPrimesInRange(min, max) {
    let arr = []

        for(let i=min;i<=max;i++){
            if(i==1){
                continue
            }
            let isPrime=true 
            for(let j=2;j<i;j++){
                if(i%j==0 ){
                    isPrime=false
                    break
                }
            }
            if(isPrime==true){
                arr.push(i)
            }
        }
        return arr
    
}


console.log(findPrimesInRange(1,20))