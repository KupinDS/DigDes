let symbol = '#';
let string = ' ';
const arr = [];

function printTriangle(value) {
  for (let i = 0; i < value; i++) {
    arr[i] = string;
  }

  for (let i = value; i > 0; i--) {
    arr[i] = symbol + ' ';
    string = arr.join('');
    console.log(string);
  }

  console.log('Хорошего Вам дня! С уважением, Дмитрий Купин.');
}

printTriangle(5);

