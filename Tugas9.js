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

const loadcontact = (nama, hp, email) =>{
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

 //ini untuk menyimpan data yang telah di input
 const simpankontak = (nama,hp,email) => {
    const contact = {nama,hp,email};
    const contacts = loadcontact()

    const duplikatNama =contacts.find((contac) => contac.nama === nama);
    if (duplikatNama){
        console.log('Nama yang anda masukan sudah terdaftar! Silahkan masukan nama lain!')
        return false;
    }
    
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

const listcontact = () => {
    const contacts = loadcontact()
    console.log ('list contact:')
    contacts.forEach((contact, i) => {
        console.log (`${i+1}. ${contact.nama} -${contact.hp}`)
    })
}

const detailcontact = (nama) => {
const contacts = loadcontact()
const contact =contacts.find((contact) => contact.nama === nama);
if (!contact){
    console.log(`${nama} ini tidak terdaftar!`)
    return false;
}
console.log(contact.nama)
console.log(contact.hp)
if(contact.email){
    console.log(contact.email)
}
}

const deletecontact = (nama) => {
    const contacts = loadcontact ()
    const newcontact = contacts.filter(
        (contact) => contact.nama !== nama
    )
    if(contacts.length === newcontact.length) {
        console.log(`${nama} tidak terdaftar!`)
        return false;
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(newcontact));
    console.log(`${nama} telah dihapus!`)
}
module.exports ={simpankontak,listcontact,detailcontact,deletecontact}