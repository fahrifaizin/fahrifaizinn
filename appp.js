const yargs = require('yargs');
const tugas7 = require ('./tugas7');
    yargs.command({
        command: 'add',
        describe: 'add new contact',
        builder:{
            nama:{
                describe: 'Contact Name',
                demandOption: true,
                type: 'string',
            },
            hp:{
                describe: 'contact mobile phone number',
                demandOption: true,
                type: 'string',
            },
            email:{
                describe: 'contact email',
                demandOption: false,
                type: 'string',
            }
        },
        handler(argv){
             tugas7.simpankontak(argv.nama, argv.hp, argv.email)
              
            }
        });
yargs.parse();