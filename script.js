
// Ucapan selamat datang 
// alert('Selamat Datang di Game Suwit Jawa');

// interaksi kepada user apakah rigram akan diulangi
// let ulang = true;

// while(ulang){

    // Perintahkan user untuk menginputkan pilihan 
    // let inputUser = prompt('Silahkan pilih MANUSIA , GAJAH, SEMUT');
    
    // // Komputer memilih secara acak
    // let comp = Math.random();
    // if (comp <= 0.33){
    //     comp = 'manusia';
    // }else if(comp > 0.33 &&  comp < 0.66){
    //     comp = 'gajah';
    // } else {
    //     comp = 'semut';
    // }
    
    // Beri tahu kepada user pilihan Komputer
    // alert(`Lawanmu memilih ${comp}`);
    
    // buat variabel untuk wadah hasil 
    // let hasil;
    
    // Bandingkan pilihan Komputer dengan pilihan user
    
    // jika pilihan user dan komputer sama maka akan seri
    // if (inputUser == comp){
        // hasil = 'Kamu Seri !';
    // } 
    // jika pilihan user dan comp berbeda
        // else {
            // menggunakan operasi ternary
            // hasil = ((inputUser == 'manusia' && comp == 'semut') || (inputUser == 'gajah' && comp == 'manusia') || (inputUser == 'semut' && comp == 'gajah')) ? 'Kamu Menang' : 'Kamu Kalah';
        // }
    
    // tampilkan hasil permainan kepada user
    // alert(hasil);

    
    // ulang = confirm('Apakah kamu akan mengulangi permainan ini lagi ?'); // ulang akan mereturn nilai true atau false
// }


// menangkap element gambar yang akan dipilih
let pilihanUser = Array.from(document.querySelectorAll('.container .main .user .kotak-pilih img'));
let user;

// jika gambar di klik oleh user
for(let i = 0; i < pilihanUser.length; i++){
    pilihanUser[i].addEventListener('click', function(){
        user = pilihanUser[i].getAttribute('class');

        // menangkap element button
        let button = document.querySelector('button');
        button.addEventListener('click', function(){
            // Komputer memilih secara acak
            let comp = Math.random();
            if (comp <= 0.33){
                comp = 'manusia';
            }else if(comp > 0.33 &&  comp < 0.66){
                comp = 'pilihGajah';
            } else {
                comp = 'pilihSemut';
            }
            console.log(comp);
            if (user == comp){
        hasil = 'Kamu Seri !';
    } 
    // jika pilihan user dan comp berbeda
        else {
            // menggunakan operasi ternary
            hasil = ((user == 'manusia' && comp == 'pilihSemut') || (user == 'pilihGajah' && comp == 'manusia') || (user == 'pilihSemut' && comp == 'pilihGajah')) ? 'Kamu Menang' : 'Kamu Kalah';
        }


        // tampilkan hasil
        const ucapan = document.querySelector('.main .hasil');
        ucapan.innerHTML = hasil;





        })
    })
    }

