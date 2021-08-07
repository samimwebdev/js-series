const productInfo1 = {
  productName: 'banana',
  productPrice: 30,
  productQuantity: 3,
  productIsAvailable: true,
  showProductInfo: function () {
    return `
     productName-${this.productName} productPrice-${this.productPrice} productQuantity-${this.productQuantity} productIsAvailable-${this.productIsAvailable}
     `;
  }
};

console.log(productInfo1.showProductInfo());
