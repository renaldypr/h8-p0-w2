// by Renaldy Pratama

function konversiMenit(menit) {
  var angkaDepan = Math.floor(menit / 60);
  var angkaBelakang = menit % 60;
  var hasil;

  if (angkaBelakang < 10) {
    hasil = angkaDepan + ':' + '0' + angkaBelakang;
  } else {
    hasil = angkaDepan + ':' + angkaBelakang;
  }

  return hasil
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00