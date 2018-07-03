// by Renaldy Pratama

var nama = 'Renaldy';
var peran = 'Penyihir'; // Ksatria, Tabib, atau Penyihir

if (nama === '' || nama === ' ') {
  console.log ('Nama harus diisi!');
} else {
  if (peran === 'Ksatria') {
    console.log ('Selamat datang di Dunia Proxytia, ' + nama + '\nHalo Ksatria '  + nama + ', kamu dapat menyerang dengan senjatamu!');
  } else if (peran === 'Tabib') {
    console.log ('Selamat datang di Dunia Proxytia, ' + nama + '\nHalo Tabib '  + nama + ', kamu akan membantu temanmu yang terluka.');
  } else if (peran === 'Penyihir') {
    console.log ('Selamat datang di Dunia Proxytia, ' + nama + '\nHalo Penyihir '  + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
  } else {
    console.log ('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
  }
}
