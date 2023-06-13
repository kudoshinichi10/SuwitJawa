// Ucapan selamat datang 
alert('Selamat Datang di Game Suwit Jawa');
// Perintahkan user untuk menginputkan pilihan 
let inputUser = prompt('Silahkan pilih MANUSIA , GAJAH, SEMUT');

// Komputer memilih secara acak
let comp = Math.random();
if (comp <= 0.33){
    comp = 'Manusia';
}else if(comp > 0.33){
    comp = 'Gajah';
} else {
    comp = 'Semut';
    
}

// Beri tahu user pilihan Komputer

alert(`Lawanmu memilih ${comp}`);

// Bandingkan pilihan Komputer dengan inputan user
if (inputUser === comp){
        alert('Kamu Seri !');
} else if (inputUser === 'Gajah') {
    if(comp == 'Manusia'){
        alert('Kamu Menang');
    } else {
        alert('Kamu Kalah');
    }
} else if (inputUser == 'Manusia') { 
    if(comp == 'Semut'){
        alert('Kamu Menang');
    } else {
        alert('Kamu Kalah');
    }
} else {
    if(comp == 'Gajah'){
        alert('Kamu Menang');
    } else {
        alert('Kamu Kalah');
    }
    
}