// Program to Convert Kilometers to Miles

function kilotoMiles(km){
    let miles = (km * 0.621371).toFixed(2)
    return miles
}

console.log(kilotoMiles(2.2))