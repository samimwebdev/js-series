// const arr = ['I', 'Love', 'Programming']
// console.log(arr.slice(0, 2))
// console.log(arr.splice(0, 2))

// console.log(arr.splice(0, 2, 'we', 'love'))

// console.log(arr.slice(1))

//...spread operator
// const newArray = ['we', ...arr.slice(1) ]

// console.log(newArray)

// console.log(arr)

//...spread operator is used in copying array, object or part of the array, object

const arr1 = ['I', 'Love', 'Programming']
const arr2 = ['we', 'Love', 'Web Development']

const [index1, ...restValue] = arr1
console.log(index1, restValue)

console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

// const arr3 = arr1.concat(arr2)
const arr3 = [...arr1, 'and', ...arr2]
console.log(arr3)

const product = {
  productName: 'banana',
  productPrice: 30,
  productQuantity: 3,
  productIsAvailable: true
}

const { productName, ...restObjValue } = product

console.log(productName, restObjValue)

const updatedProduct = {
  ...product,
  updatedKey: 'value'
}
console.log(updatedProduct)

// function sum(num2, ...restValues) {
//   console.log(arguments)
//   // for(let num of arguments ){
//   //   console.log(num)
//   // }
//   // const argsArr = Array.from(arguments)
//   // const argsArr = [...arguments]
//   // const total = argsArr.reduce((acc, cur) => acc + cur)
//   // console.log(total)
//   // console.log(num1, num2, restValues)
//   const total = 0;
//   // const total = num1 + num2;
//   const totalRes = arguments.reduce((acc, cur) => acc + cur, total)
//   console.log(totalRes)
// }

sum(2, 3, 4, 5)

// console.log(Math.floor(Math.random() * 10))
console.log(Math.random())
console.log(Math.floor(3.675))
console.log(Math.ceil(3.675))
console.log(Math.round(3.675))

// console.log(date)
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getTime())
// console.log(date.getTime())
// console.log(date.getTime())
// console.log(date.getMonth())
// console.log(date.getSeconds())
// console.log(date.getYear())

// date.setDate(11)
// console.log(date.getDate())

// const hours = date.getHours()
// const minutes = date.getMinutes()
// const seconds = date.getSeconds()

// const displayHours = hours + 1 > 12 ? 24 - (hours + 1) : hours + 1
// console.log(displayHours)

// const date = new Date()
// console.log(date.setMinutes(60))

// console.log(date.getHours())
// console.log(date.getMinutes())

// function getCurrentTime() {
//   const date = new Date()
//   //hours,Minutes, second count start from 0
//   const hours = date.getHours() + 1
//   const minutes = date.getMinutes() + 1
//   const seconds = date.getSeconds() + 1

//   const displayHours = hours > 12 ? hours - 12 : hours
//   const formatHour = displayHours < 10 ? '0' + displayHours : displayHours
//   const displayMinutes = minutes < 10 ? '0' + minutes : minutes
//   const displaySeconds = seconds < 10 ? '0' + seconds : seconds
//   console.log(`Time - ${formatHour}:${displayMinutes}:${displaySeconds} `)
//   console.log(timer)
// }

// const timer = setInterval(() => {
//   getCurrentTime()
// }, 1000)
// console.log(timer)

function Greet(firstName, lastName) {
  // console.log(this)
  // // return `Hello ${name}`
  // this.firstName = 'samim'
  // this.lastName = 'Hasan'
  // const firstName = 'samim'
  // // return firstName;
  // return {
  //   firstName: name,
  //   lastName: 'Hasan'
  // }

  this.firstName = firstName
  this.lastName = lastName
  this.fullName = function () {
    return this.firstName + this.lastName
  }
}

Greet.prototype.fullName_proto = function () {
  this.firstName + this.lastName + 'with proto'
}

// console.log(Greet('samim'))

const greet = new Greet('samim', 'Hasan')
console.log(greet)
console.log(greet.firstName)
console.log(greet.lastName)
console.log(greet.fullName())
