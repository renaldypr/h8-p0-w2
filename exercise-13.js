// by Renaldy Pratama

function xo(str) {
  var i = 0;
  var j = 0;
  var jumlahChar = str.length;
  var checkChar;
  var jumlahX = 0;
  var jumlahO = 0;
  var output;

  while (i < jumlahChar) {
    checkChar = str[j];
    if (checkChar === 'x') {
      jumlahX++;
    } else {
      jumlahO++;
    }
    checkChar = '';
    i++;
    j++;
  }

  if (jumlahX === jumlahO) {
    output = true;
  } else {
    output = false;
  }

  return output;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true