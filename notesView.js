
class NotesView {
    constructor (model) {
     this.model = model;
     this.mainContainerEl = document.querySelector('#main-container');

    }

    displayNotes () {
        const notes = this.model.getNotes()
        notes.forEach(note => {
          var newDiv = document.createElement('div');
          newDiv.className = 'note';
          newDiv.innerText = note;
          this.mainContainerEl.append(newDiv);
        });
    }
}

module.exports = NotesView;