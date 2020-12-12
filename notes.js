const fs = require('fs');
const chalk = require('chalk');

// const notes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => (note.title !==title))
    saveNotes(notesToKeep)
    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse("No note found"))
    } else { 
        console.log(chalk.green.inverse("Note removed"))
    }
}

const listNotes = () => {
    console.log(chalk.blue.bold("Note list: "))
    const allNotes = loadNotes()
    allNotes.forEach(note => console.log(note.title));
}

const readNote = (title) => {
    const allNotes = loadNotes()
    note = allNotes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.bold.inverse.cyan(title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse.bold("Note not found!"))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        data = JSON.parse(fs.readFileSync('notes.json').toString())
        return data
    } catch (e) {
        return []
    }
}

// module.exports = notes
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}