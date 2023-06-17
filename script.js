// Ucapan selamat datang 
alert('Selamat Datang di Game Suwit Jawa');
// Perintahkan user untuk menginputkan pilihan 
let inputUser = prompt('Silahkan pilih MANUSIA , GAJAH, SEMUT');

// Komputer memilih secara acak
let comp = Math.random();
if (comp <= 0.33){
    comp = 'manusia';
}else if(comp > 0.33 &&  comp < 0.66){
    comp = 'gajah';
} else {
    comp = 'semut';
    
}

// Beri tahu user pilihan Komputer
alert(`Lawanmu memilih ${comp}`);

// Bandingkan pilihan Komputer dengan inputan user

// jika pilihan user dan komputer sama maka akan seri
if (inputUser == comp){
        alert('Kamu Seri !');
} 

// jika pilihan user dan comp berbeda
else if (inputUser === 'gajah') {
    if(comp === 'manusia'){
        alert('Kamu Menang');
    } 
    else {
        alert('Kamu Kalah');
    }
} else if (inputUser === 'manusia') { 
    if(comp === 'semut'){
        alert('Kamu Menang');
    } else {
        alert('Kamu Kalah');
    }
} else {
    if(comp == 'gajah'){
        alert('Kamu Menang');
    } else {
        alert('Kamu Kalah');
    }
    
}