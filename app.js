const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const notes = require('./notes.js')

yargs.version('1.0.1')

yargs.command({
    command: 'add',
    describe: 'Adding a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
})

yargs.command({
    command: 'remove',
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'List out all the notes',
    handler: () =>console.log('Listing out the notes')
})

yargs.command({
    command: 'read',
    describe: 'Read a specific note',
    handler: () => console.log('Reading a note')
})

// console.log(notes())
// console.log(validator.isEmail('abc@xyz.in'))
// console.log(validator.isURL('google.abc')) 
// console.log(chalk.green('Success!'))
// console.log(chalk.bold.red('Error...'))
// console.log(chalk.inverse.bold.green('Success'))

// console.log(process.argv)

// console.log(yargs.argv)

yargs.parse()