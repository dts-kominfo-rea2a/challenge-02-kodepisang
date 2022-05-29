// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

// console.log(arrayObjectPegawai.length);

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let index = 0;
  let namaGabungan = [];
  while (index < dataYangAkanDilooping.length) {
    let gabungan =
      dataYangAkanDilooping[index].namaDepan +
      " " +
      dataYangAkanDilooping[index].namaBelakang;
    namaGabungan.push(gabungan);
    index++;
  }

  let hasilLooping = namaGabungan;

  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai (M)
  */

  let totPria = 0;
  let totWanita = 0;
  let totWaria = 0;
  index = 0;

  while (index < dataYangAkanDilooping.length) {
    let list = dataYangAkanDilooping[index];
    if (list.jenisKelamin == "M") {
      totPria++;
    } else if (list.jenisKelamin == "F") {
      totWanita++;
    } else {
      totWaria++;
    }
    index++;
  }

  let jumlahPria = totPria;
  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai (F)
  */
  let jumlahWanita = totWanita;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let komen = null; 
  if (totPria > totWanita) {
    komen = "Jumlah Pria lebih banyak dari Wanita";
  } else if (totPria < totWanita) {
    komen = "Jumlah Wanita lebih banyak dari Pria";
  } else {
    komen = "Jumlah Pria dan Wanita berimbang";
  }

  let komentar = komen;
  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
