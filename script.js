console.log('this:', this);

// #2
function demo() {
  console.log('demo this:', this)
}
demo();

const demo2= () =>  {
    console.log('demo2 this:', this)

}

// // #3
const obj = {
  demo: demo,
  demo2: demo2
}
obj.demo();
obj.demo2();





// doubleCheck();

// function check() {
//     console.log('check this file')
// }

// function doubleCheck() {
//     check()
//     check()
// }