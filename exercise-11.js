//by Renaldy Pratama

function balikKata(kata) {
  var i = 0;
  var j = 1;
  var indexChar = kata.length;
  var hasilKata = '';

  while (i < indexChar) {
    hasilKata = hasilKata + kata[indexChar - j]
    i++;
    j++;
  }

  return hasilKata;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS