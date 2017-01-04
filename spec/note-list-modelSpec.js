function testListIsEmptyArray() {
  var notelist = new NoteList();

  if(notelist.list.length !== 0) {
    throw new Error("Notes array is not empty");
  }

};

function testCanAddNoteToList(){
  var notelist = new NoteList();
  var note = { text: "firstnote" };
  notelist.storeNote(note);

  if (notelist.list[0] !== note){
    throw new Error("Notelist array not storing new entries");
  }
};

function testListReturnsMultipleNotes() {
  var notelist = new NoteList();
  var note1 = { text: "firstnote" };
  var note2 = { text: "secondnote" };
  notelist.storeNote(note1);
  notelist.storeNote(note2);

  if (notelist.list[1] !== note2){
    throw new Error("Notelist array not storing multiple entries");
  }
};

function testShowListReturnsMultipleNotes() {
  var notelist = new NoteList();
  var note1 = { text: "firstnote" };
  var note2 = { text: "secondnote" };
  notelist.storeNote(note1);
  notelist.storeNote(note2);

  if (notelist.showList() !== notelist.list){
    throw new Error("Notelist array not showing multiple entries");
  }
};




testListIsEmptyArray();
testCanAddNoteToList();
testListReturnsMultipleNotes();
testShowListReturnsMultipleNotes();
