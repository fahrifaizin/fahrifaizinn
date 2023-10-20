const readline = require("readline");
const validator = require("validator");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat fungsi create folder atau file json jika tidak tersedia/dihapus
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
//file json
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf-8");
}

function inputNama() {
  rl.question("Masukkan Nama : ", (nama) => {
    inputNotelp(nama);
  });
}

function inputNotelp(nama) {
  rl.question("Masukkan NoTelp : ", (telp) => {
    const cekTelpon = validator.isMobilePhone(telp, "id-ID", { strictMode: false });

    if (cekTelpon) {
      askEmail(nama, telp);
    } else {
      console.log("No Telp salah. Silahkan masukkan sesuai format IDN!");
      inputNotelp(nama);
    }
  });
}

function askEmail(nama, telp) {
  rl.question("Masukkan Email : ", (email) => {
    const cekEmail = validator.isEmail(email);

    if (cekEmail) {
      simpanInfo(nama, telp, email);
      console.log(`Nama saya ${nama}, nomor telpon saya  ${telp}, dan alamat email saya ${email}`);
      rl.close();
    } else {
      console.log("Email yang dimasukkan salah. Silahkan masukkan sesuai format email");
      askEmail(nama, telp);
    }
  });
}
const simpanInfo = (nama, telp, email) => {
  //menyimpan hasil inputan nama, telp, email kedalam variabel contact
  const contact = { nama, telp, email };

  //membaca file contact.json
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  //menambahkan daftar kontak baru ke daftar kontak
  contacts.push(contact);

  //menyimpan atau menulis daftar kontak ke file json
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

inputNama();