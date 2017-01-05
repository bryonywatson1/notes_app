function doubleNote() {
  this.text = 'Note';
  this.id = 0;
}
var testNote = new doubleNote();
function doubleList() {
  this.notes = [testNote];
}
var list = new doubleList();

var noteController = new NoteController(list);



(function testsInstatiationOfNoteController() {
  if (typeof(NoteController) === "undefined") {
      throw new Error("List is not defined");
  } else if
      (noteController instanceof NoteController === false) {
    throw new Error("noteController was not instantiated");
  } else {
      console.log("testsInstatiationOfNoteController test passed");
  }
})();

(function testsCanFindNote() {

  if (noteController.findNote() !== testNote) {
    throw new Error("findNote has not returned testNote");
  } else {
    console.log('testsCanFindNote test passed');
  }
})();

(function testsDisplaysSingleNote() {

  if (noteController.displaySingleNote() !== "<div>Note</div>"){
    throw new Error("Does not display single note");
  } else {
    console.log('testsDisplaysSingleNote test passed');
  }
})();

(function testsMakingANewNote () {
  noteController.makeNewNote("Our testing string");
  if ( noteController.view.list.notes.length !== 2  ) {
    throw new Error ("The new note has not been created");
  }
  else {
    console.log('testsMakingANewNote test passed');
  }
})();
