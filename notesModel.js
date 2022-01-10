class NotesModel {
  constructor () {
    this.notes = []
  }

  getNotes() {
    return this.notes
  }

  addNote(item) {
    this.notes.push(item)
  }
}




module.exports = NotesModel;