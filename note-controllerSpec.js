function testControllerCanBeInstantiated() {
  var notecontroller = new NoteController();
  if(notecontroller === undefined) {
    throw new Error("notecontroller doesn't exist");
  }
};

function testInnerAppElement() {
  var notecontroller = new NoteController();
  notecontroller.addFavourite();
  notecontroller.showNotes();
  if(document.getElementById('app').innerHTML !== "<ul><li>Favourite Drink: sel</li></ul>") {
    throw new Error("..");
  }
};

function testAddFavourite() {
  var noteController = new NoteController();
  noteController.addFavourite();

  if(noteController.notelist.list[0].text !== "Favourite Drink: seltzer"){
    throw new Error("Add Favourite drink function not working");
  }
};

testControllerCanBeInstantiated();
testInnerAppElement();
testAddFavourite();
