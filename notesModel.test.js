const NotesModel = require('./notesModel') 

describe('NotesApp class', () => {
  const model = new NotesModel();
  it('instantiate with an empty array', () => {
    expect(model.getNotes()).toEqual([]);
  });  

  it('added item to notes array', () => {   
    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    expect(model.getNotes().length).toEqual(2);
    expect(model.getNotes()).toEqual(['Buy milk','Go to the gym']);
  });

  it('empties the notes array', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();

    expect(model.getNotes()).toEqual([]);
    expect(model.getNotes().length).toEqual(0);
  });
});




// model.reset();

// model.getNotes(); // should now return []