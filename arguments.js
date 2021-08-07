// function sum() {
//   // let total = 0;
//   //arguments are array like structure consists of values passed to the function
//   console.log(arguments)
//   // for(let num of arguments){
//   //   console.log(num)
//   //   total += num
//   // }

//   //converting argument iin Real array
//   // const argsArr = Array.from(arguments)
//   const argsArr = [...arguments]

//    const total = argsArr.reduce((acc, cur) => acc + cur)
//   return total
// }

//Arguments alternative

function sum(...restValue) {
  console.log(restValue)
  return restValue.reduce((acc, curr) => {
    return acc + curr
  })
}
console.log(sum(1, 2, 3))
