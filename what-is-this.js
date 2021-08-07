//1)this indicate window(global scope)
console.log(this)
//2)this indicate parent object , if you declare inside method
const product = {
  productName: 'Wheat',
  productPrice: 50,
  productQuantity: 6,
  productIsAvailable: false,
  showProductInfo() {
    function innerFunc(greet) {
      console.log(greet)
      //this indicate window obj
      console.log(this)
    }
    innerFunc.call(product, 'Hello')

    console.log(this)
    return `${this.productName}- ${this.productPrice} Quantity-${this.productQuantity} -Available-${this.productIsAvailable}`
  }
}

console.log(product.showProductInfo())
const demoProduct = product.showProductInfo
//this indicate window
console.log(demoProduct.call(product))

//3)this indicate object created based on constructor function
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

const product1 = new Product('Wheat', 50, 5, false)
console.log(product1)
console.log(product1.showProductInfo())

//4) this indicate window obj in not strict mode but undefined in strict mode
function sampleFunc() {
  console.log(this)
}
sampleFunc()

//solution- this is defined by how you call the function
