//Javascript first class  function
// function as variable reference
// function as return value
//function as  input argument

// function func(){
//   console.log('bla..bla..')
// }
// func()

// const func = function(){
//   console.log('output')
// }

// func()

//higher order function and callback function

// function outerFunc(){
//   return function innerFunc(){
//     console.log('Inner Function output')
//   }
// }

// outerFunc()();

function outerFunc(innerFunc) {
  console.log(innerFunc());
}

outerFunc(function () {
  console.log('Inner function to be called');
});
