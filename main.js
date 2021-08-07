//object-key value pair

;(function () {
  const products = [
    {
      productName: 'banana',
      productPrice: 30,
      productQuantity: 3,
      productIsAvailable: true
    },
    {
      productName: 'Wheat',
      productPrice: 50,
      productQuantity: 6,
      productIsAvailable: false
    }
  ]

  const showProductInfo = (products) => {
    //console.log(product)
    let singleProduct = ''
    //for of loop
    for (let product of products) {
      const {
        productName,
        productPrice,
        productQuantity,
        productIsAvailable
      } = product

      singleProduct += `
      productName-${productName}
      productPrice-${productPrice}
      productQuantity-${productQuantity}
      productIsAvailable-${productIsAvailable}
      ${productIsAvailable ? 'In Stock' : 'Out of Stock'}
      `
    }

    //for each loop
    // products.forEach(function (product) {
    //   singleProduct += `
    //   productName-${product.productName}
    //   productPrice-${product.productPrice}
    //   productQuantity-${product.productQuantity}
    //   productIsAvailable-${product.productIsAvailable}
    //   `;
    // });

    //plain for loop(time consuming)
    // for (let index = 0; index < product.length; index++) {
    //   singleProduct += `
    //   productName-${product[index].productName}
    //   productPrice-${product[index].productPrice}
    //   productQuantity-${product[index].productQuantity}
    //   productIsAvailable-${product[index].productIsAvailable}
    //   `;
    // }
    //show all information about a product
    //template string
    return singleProduct
  }

  // showProductInfo(productInfoObj1);
  const productOut = showProductInfo(products)

  console.log(productOut)
})()

IIFE
