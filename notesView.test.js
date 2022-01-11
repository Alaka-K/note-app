/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');
 
 describe('Page view', () => {
   it('displays 2 notes', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
 
      const model = new NotesModel()
      const view = new NotesView(model);
      model.addNote("fist note");
      model.addNote("second note");

      view.displayNotes();

      expect(document.querySelectorAll('div.note').length).toBe(2);
   });
 });