const fs = require('fs');
const chalk = require('chalk');

const notes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0){
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
    notes: notes,
    addNote: addNote,
    removeNote: removeNote
}