const readline = require('readline');
const validator = require('validator');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nama = '';
let handphone = '';

function inputNama() {
    rl.question("Masukkan nama anda ? ", (inputNama) => {
        if (validator.isLength(inputNama, { min: 3, max: 50 })) {
            nama = inputNama;
            inputNomorHandphone();
        } else {
            console.log("Nama harus memiliki panjang minimal 3 karakter dan maksimal 50 karakter. Silakan coba lagi.");
            inputNama();
        }
    });
}

function inputNomorHandphone() {
    rl.question("Masukkan Nomor Handphone anda ? ", (inputHandphone) => {
        if (validator.isMobilePhone(inputHandphone, "any")) {
            handphone = inputHandphone;
            inputEmail();
        } else {
            console.log("Nomor Handphone tidak valid. Silakan coba lagi.");
            inputNomorHandphone();
        }
    });
}

function inputEmail() {
    rl.question("Masukkan email anda ? ", (email) => {
        if (validator.isEmail(email)) {
            console.log(`Nama saya adalah ${nama}, nomor telepon saya ${handphone}, dan email saya adalah ${email}. Thank You!!`);
            rl.close();
        } else {
            console.log("Alamat email tidak valid. Silakan coba lagi.");
            inputEmail();
        }
    });
}

inputNama();