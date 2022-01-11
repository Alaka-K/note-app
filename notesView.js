
class NotesView {
    constructor (model) {
     this.model = model   
    }

    displayNotes () {
        this.model.getNotes().forEach(note => {
          var newDiv = document.createElement('div');
          newDiv.classList.add('note');
          const mainDiv = document.querySelector("#main-container")
          newDiv.append(note);
          mainDiv.append(newDiv);
        });
    }
}

module.exports = NotesView;