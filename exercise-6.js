// by Renaldy Pratama

// 1. Melakukan Looping Menggunakan While

var counter = 0;

console.log('LOOPING PERTAMA');

while (counter < 20) {
  counter += 2;
  console.log(counter + ' - I love coding');
}

console.log('LOOPING KEDUA');

while (counter > 0) {
  console.log(counter + ' - I will become fullstack developer');
  counter -= 2;
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');

for (var counter = 1; counter < 21; counter++) {
  console.log(counter + ' - I love coding');
}

console.log('LOOPING KEDUA');

for (var counter = 20; counter > 0; counter--) {
  console.log(counter + ' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

// a. ganjil genap
var counter = 0;

while (counter < 100) {
  counter++;
  if (counter % 2 == 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}

// b. pertambahan counter 2
var counter = 1;

while (counter <= 100) {
  if (counter % 3 == 0) {
    console.log(counter + ' KELIPATAN 3');
  } else {
    console.log('');
  }
  counter += 2;
}

//c. pertambahan counter 5
var counter = 1;

while (counter <= 100) {
  if (counter % 6 == 0) {
    console.log(counter + ' KELIPATAN 6');
  } else {
    console.log('');
  }
  counter += 5;
}

// d. pertambahan counter 9
var counter = 1;

while (counter <= 100) {
  if (counter % 10 == 0) {
    console.log(counter + ' KELIPATAN 10');
  } else {
    console.log('');
  }
  counter += 9;
}
