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




// menangkap element button
const button = document.querySelector('button');

// jika button di klik
button.addEventListener('click', function() {
  // menangkap element untuk menampilkan hasil
const hasilPermainan = document.querySelector('.container .main .hasil');

// tampilkan hasil
hasilPermainan.innerHTML = hasil(pilCom(), pilUser);

})
