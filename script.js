// menangkap element gambar yang akan dipilih
const gambarDipilih = document.querySelectorAll('.container .main .user .kotak-pilih div img');


// console.log(pilihanUser);


// menangkap element button
const button = document.querySelector('button');

// jika button di klik
button.addEventListener('click', function() {
  // jika gambar di klik oleh user maka akan mengembalikan sebuat class
  gambarDipilih.forEach(function(e){
    e.addEventListener('click', function(){
      console.log(e.className);
    })
  })

})


      
// Komputer memilih secara acak
let comp = Math.random();
if (comp <= 0.33){
    comp = 'manusia';
}else if(comp > 0.33 &&  comp < 0.66){
    comp = 'gajah';
} else {
    comp = 'semut';
}
  // console.log(comp);

// function versus(hasil){
  

//     if (user == comp){
//         return 'Kamu Seri';
//     } 
  // jika pilihan user dan comp berbeda
      // else {
    // menggunakan operasi ternary
      // return ((user == 'manusia' && comp == 'pilihSemut') || (user == 'pilihGajah' && comp == 'manusia') || (user == 'pilihSemut' && comp == 'pilihGajah')) ? 'Kamu Menang' : 'Kamu Kalah'}
// }




// menangkap element untuk menampilkan hasil
// const ucapan = document.querySelector('.container .main .hasil');

// tampilkan hasil
// ucapan.innerHTML = versus();








// menangkap element button
// let button = document.querySelector('button');
// button.addEventListener('click', function(){

// }