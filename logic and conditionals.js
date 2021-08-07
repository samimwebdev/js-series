//if
//else if
//else

const productPrice = 100;

let freeShipping = false;
let handPicked = false;

switch (productPrice) {
  case productPrice >= 100 && productPrice:
    freeShipping = true;
    handpicked = false;
    break;
  case productPrice >= 60 && productPrice:
    freeShipping = false;
    handPicked = true;
    break;
  default:
    freeShipping = false;
    handpicked = false;
}

console.log(freeShipping);
console.log(handPicked);

// if (productPrice >= 100) {
//   freeShipping = true;
//   handPicked = false;
// } else if (productPrice >= 60 ) {
//   // output
//   freeShipping = false;
//   handPicked = true;
// } else {
//   freeShipping = false;
//   handPicked = false;
// }

// ternary operator
// condition ? trueOutput: falseOutPut
// freeShipping = productPrice >= 100 ? true : false;
// handPicked = productPrice >= 60 || productPrice < 99 ? true : false;

//Falsy value
//false
//undefined
//null
//''(empty string)
//NaN
//0
//otherwise all values are truthy
