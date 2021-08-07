// const product = {
//   productName: 'Wheat',
//   productPrice: 50,
//   productQuantity: 6,
//   productIsAvailable: false
// }
//factory Function
// function showProductInfo(
//   productName,
//   productPrice,
//   productQuantity,
//   productIsAvailable
// ) {
//   return {
//     productName,
//     productPrice,
//     productQuantity,
//     productIsAvailable
//   }
// }

// console.log(showProductInfo('wheat', 50, 6, false))

//constructor Function

function Product(
  productName,
  productPrice,
  productQuantity,
  productIsAvailable
) {
  //this indicate object  created after calling of constructor function
  //multiple copy
  this.productName = productName
  this.productPrice = productPrice
  this.productQuantity = productQuantity
  this.productIsAvailable = productIsAvailable
  this.showProductInfo = function () {
    return `${this.productName}- ${this.productPrice} Quantity-${this.productQuantity} -Available-${this.productIsAvailable}`
  }
}

//__proto__(single copy)
Product.prototype.showProductInfoProto = function () {
  return `${this.productName}- ${this.productPrice} Quantity-${this.productQuantity} -Available-${this.productIsAvailable}`
}

const product1 = new Product('Wheat', 50, 5, false)
// const product2 = new Product('Potato',30, 2, true)
// console.log(product2)

console.log(product1)
console.log(product1.productName)
console.log(product1.showProductInfo())
console.log(product1.showProductInfoProto())
