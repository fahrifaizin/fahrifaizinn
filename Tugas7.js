const validator = require('validator');
const fs = require ('fs');
    
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

 //ini untuk menyimpan data yang telah di input
 const simpankontak = (nama,hp,email) => {
    const contact = {nama,hp,email};

    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
     //cek no telepon
     if (hp){
        if(!validator.isMobilePhone(hp, 'id-ID')){
            console.log('nomor yang anda masukan salah!')
            return false;
        }
    }
    //cek email
    if (email){
        if (!validator.isEmail(email)){
            console.log('email yang anda masukan salah!')
            return false;
        }
    }
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    
    console.log ('data sudah berhasil disimpan!')
}

module.exports ={simpankontak}