// by Renaldy Pratama

// 1. Menyusun Barisan Bintang

var rows1 = 5; // input the number of rows
var i = 0;

while (i < rows1) {
  console.log('*');
  i++;
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5; // input the number of rows
var i = 0;
var j;
var asterisk;

while (i < rows2) {
  asterisk = '';
  j = 0;
  while (j < rows2) {
    asterisk = asterisk + '*';
    j++;
  }
  console.log(asterisk);
  i++;
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5; // input the number of rows
var i = 0;
var j;
var asterisk;

while (i < rows3) {
  asterisk = '';
  j = 0;
  while (j < i + 1){
    asterisk = asterisk + '*';
    j++;
  }
  console.log(asterisk);
  i++;
}
