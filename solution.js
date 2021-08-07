const name = 'samim'

function reverseName(name) {
  return name.split('').reverse().join('')
}

console.log(reverseName(name))

function sum(arr) {
  // should return sum of array values
  let sum = 0
  if (!Array.isArray(arr)) return 'please provide array'

  for (let num of arr) {
    sum += num
  }

  return sum
}

const arr = [1, 2, 3]
console.log(sum(arr))

// map homework solution
// const arr = ['I', 'love', 'programming']

// const mappedArr = arr.map((el) => (el === 'programming' ? el + '!' : el))
// console.log(mappedArr)

//Filter solution
const filteredArray = arr.filter((el) => el.includes('mm') && el)
console.log(filteredArray)

//solution using reduce
const nums = [10, 20, 30]

const sum = nums.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue)
  return accumulator + currentValue
}, 0)

console.log(sum)

//total sum -60
