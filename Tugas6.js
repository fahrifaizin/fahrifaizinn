const readline = require('readline');
const validator = require('validator');
const fs = require ('fs');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//cek folder dan buat folder
const dirpath = './data'
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath)
}

//cek file data
const filepath = 'data/contacts.json'
if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, '[]', 'utf-8')
}

//let nama = '';
//let hp = '';
//let email = '';
function main () {
    function inputNama() {
        rl.question("Masukkan nama anda ? ", (nama) => {
            if (validator.isLength(nama, { min: 3, max: 50 })) {
                //nama = Nama;
                inputNomor(nama);
            } else {
                console.log("Nama anda salah. Silakan coba lagi.");
                inputNama();
            }
        });
    }
    
    function inputNomor(nama) {
        rl.question("Masukkan Nomor Hp anda ? ", (hp) => {
            if (validator.isMobilePhone(hp, "any")) {
                //hp = inputHandphone;
                Email(nama, hp);
            } else {
                console.log("Nomor Handphone anda salah. Silakan coba lagi.");
                inputNomor();
            }
        });
    }
    
    function Email(nama, hp) {
        rl.question("Masukkan email anda ? ", (email) => {
            if (validator.isEmail(email)) {
                console.log(`Nama saya adalah ${nama}, nomor telepon saya ${hp}, dan email saya adalah ${email}. Terima Kasih!!`);
                //email = email;
                simpankontak (nama,hp,email);
                rl.close();
            } else {
                console.log("Alamat email tidak valid. Silakan coba lagi.");
                Email(nama, hp);
            }
        });
    
    //ini untuk menyimpan data yang telah di input
    const simpankontak = (nama,hp,email) => {
        const contact = {nama,hp,email};
    
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        
    }
    
}
inputNama()
}

main();