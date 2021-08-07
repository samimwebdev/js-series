const a = 10

//global scope
//local scope- functional scope, block scope

// console.log(b)
//console.log(c)
function outerFunc() {
  const a = 20
  console.log(a)
  // console.log(c)
  let b = 5
  return function innerFunc() {
    b = 10
    const c = 2
    console.log(a)
    console.log(c)
    console.log(b)
  }
}

outerFunc()()
