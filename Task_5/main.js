let arr = [];

function fillArray(min, max) {
  let myArr = []
  for (let i = 0; i < 10; i++) {
    myArr.push(Math.floor(min + Math.random() * (max + 1 - min)));
  }
  console.log(myArr);
  replaceFromArray(myArr)
}

function replaceFromArray(array) {
  myArr = array.map(x => x < 0 ? x = 0 : x);

  console.log(myArr);
  addToArray(myArr)
}

function addToArray(array) {
  arr = array.map((item, index) => {
    if ((item === 0) && (index % 2 === 0)) {
      return -1
    }
    return item
  })
  console.log(arr);
}

fillArray(-100, 100);
