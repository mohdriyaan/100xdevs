// Calculate arae of the triangle
// Using base and height\
function areaofTri(base,height){
    let area = (base*height) / 2
    console.log(area)
}

areaofTri(10,2)

// If all sides are known
function areaofTri1(s1,s2,s3){
    // semi perimeter
    const s = (s1+s2+s3)/2
    // area of triangle using heron's formula
    const area = Math.sqrt(s * (s-s1) * (s-s2) * (s-s3))
    console.log(area)
}

areaofTri1(3,4,5)