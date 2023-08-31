// variabel user digunakan untuk menampung nama user

var user = prompt('Siapa Namamu ? ');


// menangkap element ucapan
const elementUcapan = document.querySelector('.container .ucapan h2');

// menangkap element waktu
const waktu  = document.querySelector('.container .waktu h3');


// function untuk waktu berjalan
setInterval(waktuJalan, 1000);

// function untuk waktu
function waktuJalan() {
  waktu.innerHTML = new Date().toLocaleTimeString();
}

// beri ucapan kepada user
// todo jika user tidak mengisi nama makan ucapan tidak diikuti dengan nama.
// function untuk cetak ucapan
function cetakNama(namaUser) {
  if (namaUser != null) {
    elementUcapan.textContent = ucapan(namaUser); 
  } else {
    elementUcapan.textContent = `Selamat Pagi`; 
  }
  // todo ucapan di sesuaikan dengan waktu real time.
  // todo jika waktu dari jam 12 malam sampai jam 10 pagi maka selamat pagi
  // todo jika waktu dari jam 10 pagi sampai jam 2 sore maka selamat siang
  // todo jika waktu dari jam 2 sore sampai jam 6 sore maka selamat sore
  // todo jika waktu dari jam 6 sore sampai jam 12 malam maka selamat malam
}

// function untuk ucapan
function ucapan(namaUser) {
  return `Selamat Pagi ${namaUser}`;
}

// menjalankan function cetak ucapan
cetakNama(user);

// menangkap element gambar pilihan
const gambarDipilih = document.querySelectorAll('.container .main .user .kotak-pilih div input');

// menangkap pilihan user

// variabel untuk menampung pilihan user
let pilUser;

gambarDipilih[0].addEventListener('change', function (){
   pilUser = this.className;
  })
  gambarDipilih[1].addEventListener('change', function (){
    pilUser = this.className;
  })
  gambarDipilih[2].addEventListener('change', function (){
    pilUser = this.className;
})


// function untuk menghasilkan pilihan komputer

function pilCom() {
  // Komputer memilih secara acak
    let comp = Math.random();
if (comp <= 0.33){
    return comp = 'manusia';
}else if(comp > 0.33 &&  comp < 0.66){
    return comp = 'gajah';
} else {
    return comp = 'semut';
}
}


// function hasil permainan


function hasil(pilCom, pilUser){

// jika user belum memilih pilihan maka game akan memberi tahu user
if(pilUser == undefined){
  return `Kamu belum memilih pilihan !`
} else {
  // menangkap ement gambar pilihan komputer
  let gambarPilihanKomputer = document.querySelector('.container .main .komputer img');
  
  // mengubah gambar pilihan komputer sesuai dengan pilihan komputer
  gambarPilihanKomputer.setAttribute('src', `image/${pilCom}.jpg`);
  
  if (pilCom == pilUser){
    return 'Kamu Seri';
   } 
  // jika pilihan user dan pilUser berbeda
  else {
    // menggunakan operasi ternary
    return ((pilCom == 'manusia' && pilUser == 'semut') || (pilCom == 'gajah' && pilUser == 'manusia') || (pilCom == 'semut' && pilUser == 'gajah')) ? 'Kamu Kalah' : 'Kamu Menang'}
}
    }







// menangkap element button
const button = document.querySelector('button');

// jika button di klik
button.addEventListener('click', function() {
  // menangkap element untuk menampilkan hasil
const hasilPermainan = document.querySelector('.container .main .hasil');

// tampilkan hasil
hasilPermainan.innerHTML = hasil(pilCom(), pilUser);

// todo beri warna background pada kolom hasil sesuai dengan hasilnya
// todo jika menang warna hijau
// todo jika kalah warna merah
// todo jika seri warna biru

if(hasilPermainan.innerHTML == 'Kamu Kalah'){
  hasilPermainan.style.backgroundColor = 'red';
} else if(hasilPermainan.innerHTML == 'Kamu Menang'){
  hasilPermainan.style.backgroundColor = 'green';
} else if(hasilPermainan.innerHTML == 'Kamu Seri'){
  hasilPermainan.style.backgroundColor = 'blue';
} else {
  // hasilPermainan.style.color = 'red';

}


})










