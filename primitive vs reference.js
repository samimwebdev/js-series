//All primitive - compare by Value
// const a = 10
// const b = 10
// console.log(a === b)

//all complex data type/object data type/reference data type compare by reference(memory location)
// const aObj = {a: 10}
// const bObj = {a: 10}
// console.log(aObj.a === bObj.a)
// console.log(aObj === bObj)

// const aArray  = ['10']
// const bArray = ['10']
// console.log(aArray[0] === bArray[0])
// console.log(aArray === bArray)

//pass by value vs pass by Reference

const a = 10

function passByValue(a) {
  console.log(a)
  let b = a
  b = 20
  console.log(b)
}


passByValue(a)

console.log(a)

//reference data type
const aObj = {
  num: 10
}
function passByReference(aObj) {
  let bObj = aObj
  console.log(bObj)
  bObj.num = 20
  console.log(bObj)
}

passByReference(aObj)
console.log(aObj)