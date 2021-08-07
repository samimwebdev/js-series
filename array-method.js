//Way of looping
//siple (plain) for loop
//while loop
//for of loop(array-recommended)
//for in loop(object)
//forEach loop

//Array Helper method
//map
//filter
//find
//every
//some
//reduce

// const arr = ['I', 'love', 'programming', 25]

//map -array helper method
//1)Works like regular looping
//2) Work with Array
//3)return a new array (with modified or without modified element)
//4)Don't mutating(change) the original array

// const mappedArr = arr.map((el) => el.toUpperCase())

// console.log(mappedArr)

//filter -array helper method
//1)Works like regular looping
//2) Work with Array
//3)return a new array (Based on some condition)
//4)Don't mutating(change) the original array

// const filteredArray = arr.filter((el) => el.length > 3 && el)

// console.log(filteredArray)

// const arr = ['I', 'love', 'programming']

//find -array helper method
//1)Works like regular looping
//2) Work with Array
//3)return a single value (Based on some condition)
//4)Don't mutating(change) the original array

// const findArray = arr.find((el) => el.length > 3 && el)

// console.log(findArray)

//every-array helper method
//1)Works like regular looping
//2) Work with Array
//3)return true or false  (Based on some condition)
//4)Don't mutating(change) the original array

// const resultArr = arr.every(el => {
//   return typeof el === 'string'
// })

// console.log(resultArr)

//some -array helper method
//1)Works like regular looping
//2) Work with Array
//3)return true or false  (Based on some condition)
//4)Don't mutating(change) the original array

// const arr = ['I', 'love', 'programming', 25]

// const resultArr = arr.some(el => {
//   return typeof el === 'string'
// })

// console.log(resultArr)

//reduce-array helper method
//1)Works like regular looping
//2) Work with Array
//3)return reduced value
//4)Don't mutating(change) the original array

// const arr = ['I', 'love', 'programming']

//accumulator  currentValue
//I             Love
//I Love      programming

//accumulator  currentValue
//we             I
//We I        Love
//we I Love   programming

// const reducedValue =  arr.reduce((accumulator, currentValue ) => {
//   console.log(accumulator, currentValue)
//   return`${accumulator} ${currentValue} `
//   // accumulator = 'I love programming'
// }, 'we')

// console.log(reducedValue)

const nums = [10, 20, 30]

const sum = nums.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue)
  return accumulator + currentValue
}, 0)

console.log(sum)

//total sum -60
