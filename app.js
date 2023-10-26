const argv = require("yargs");
const yargs = require('yargs');
const tugas9 = require ('./tugas9');
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
            tugas9.simpankontak(argv.nama, argv.hp, argv.email)
            }
        });

        yargs.command({
            command: 'list',
            describe: 'list contact',
            handler(argv){
            tugas9.listcontact()
            }
        })

        yargs.command({
            command: 'detail',
            describe: 'detail contact',
            builder:{
                nama:{
                    describe: 'Contact Name',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv){
            tugas9.detailcontact(argv.nama)
            }
            
        })
        
        yargs.command({
            command: 'delete',
            describe: 'delete contact',
            builder:{
                nama:{
                    describe: 'Contact Name',
                    demandOption: true,
                    type: 'string'
                }
            },
            handler(argv){
            tugas9.deletecontact(argv.nama)
            }
            
        })
yargs.parse();