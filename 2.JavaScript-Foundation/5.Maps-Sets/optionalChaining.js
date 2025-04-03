const user = {
    user1:"value1",
    user2 : {user3 : "value3"}
}

console.log(user)
console.log(user?.user1)
console.log(user?.user2?.user3)
