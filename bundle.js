(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(item) {
          this.notes.push(item);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model) {
          this.model = model;
        }
        displayNotes() {
          this.model.getNotes().forEach((note) => {
            var newDiv = document.createElement("div");
            newDiv.classList.add("note");
            const mainDiv = document.querySelector("#main-container");
            newDiv.append(note);
            mainDiv.append(newDiv);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notes = new NotesModel();
  var notesView = new NotesView(notes);
  notes.addNote("first note");
  notes.addNote("second note");
  notesView.displayNotes();
})();
