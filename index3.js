const fs = require("fs");
const { resolve } = require("path");
const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  const lokasiDirr = "./data";
  if (!fs.existsSync(lokasiDirr)) {
    fs.mkdirSync(lokasiDirr);
    console.log("Folder berhasil dibuat.");
  } else {
    console.log("Folder sudah ada.");
  }

  const filePath = data/contacts.json;
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, [], utf-8);
  }

  const saveContact = (nama, nomor, email) => {
    const contact = { nama, nomor, email };
    const file = fs.readFileSync("data/contacts.json", "utf8");
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  };

    const InputNama = () => {
      return new Promise((resolve, reject) => {
        rl.question("Masukan nama anda: ", (nama) => {
          resolve(nama);
          inputNomor(nama);
        });
      });
    };

    const inputNomor = (nama) => {
      return new Promise((resolve, reject) => {
        rl.question("Masukan nomor anda: ", (nomor) => {
          resolve(nomor);
          if (validator.isMobilePhone(nomor, "id-ID")) {
            inputEmail(nama, nomor);
          } else {
            console.log("Nomor yang anda masukan tidak valid. Silahkan coba lagi");
            inputNomor(nama);
          }
        });
      });
    }

    const inputEmail = (nama, nomor) => {
      return new Promise((resolve, reject) => {
        rl.question("Masukan email anda : ", (email) => {
          if (validator.isEmail(email)) {
            saveContact(nama, nomor, email);
            console.log(`Nama saya adalah ${nama}, nomor telepon saya ${hp}, dan email saya adalah ${email}. Terima Kasih!!`);
            console.log("Data tersimpan!!!");
            rl.close();
          } else {
            console.log("Email yang anda masukan tidak valid. Silakan coba lagi.");
            inputEmail(nama, nomor);
          }
        });
      });
    }

    InputNama();
}
main();