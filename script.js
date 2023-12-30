let pilihanUser;
const pilihanGambar = document.querySelectorAll('.kotak-pilih div img');
const gambarPilihanKomputer = document.querySelector('.container .komputer img');

for (let i = 0; i < pilihanGambar.length; i++) {
  pilihanGambar[i].addEventListener('click', function () {
    pilihanUser = pilihanGambar[i].getAttribute('class');
  })
}


function pilihanKomputer() {
  let comp = parseInt(Math.random() * 10 % 3) + 1;
  if (comp == 1) return comp = 'manusia'; 
  else if(comp == 2) return comp = 'gajah';
  else return comp = 'semut';
}


function hasil(pilihanKomputer, pilihanUser){
  if(pilihanUser == undefined) return `Kamu belum memilih pilihan !`; 
  else {

    gambarPilihanKomputer.setAttribute('src', `image/${pilihanKomputer}.png`);
    if (pilihanKomputer == pilihanUser){
      return 'Kamu Seri';
    } 
    else {
      return ((pilihanKomputer == 'manusia' && pilihanUser == 'semut') || (pilihanKomputer == 'gajah' && pilihanUser == 'manusia') || (pilihanKomputer == 'semut' && pilihanUser == 'gajah')) ? 'Kamu Kalah' : 'Kamu Menang'}
  }
    }

const button = document.querySelector('button');

button.addEventListener('click', function() {
  const hasilPermainan = document.querySelector('.container .hasil span');
  const boxHasilPermainan = document.querySelector('.container .hasil');

  if (pilihanUser != undefined) {
    hasilPermainan.innerHTML = hasil(pilihanKomputer(), pilihanUser);
    if(hasilPermainan.innerHTML == 'Kamu Kalah'){
      boxHasilPermainan.style.backgroundColor = 'red';
    } else if(hasilPermainan.innerHTML == 'Kamu Menang'){
      boxHasilPermainan.style.backgroundColor = 'green';
    } else if(hasilPermainan.innerHTML == 'Kamu Seri'){
      boxHasilPermainan.style.backgroundColor = 'blue';
    }
    pilihanUser = undefined;    
  } else {
    boxHasilPermainan.style.backgroundColor = 'white';
    hasilPermainan.innerHTML = 'Kamu belum memilih !';
  }


});

