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

  reset() {
    this.notes = []
  }
}




module.exports = NotesModel;