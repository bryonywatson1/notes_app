function testControllerCanBeInstantiated() {
  var notecontroller = new NoteController();
  if(notecontroller === undefined) {
    throw new Error("notecontroller doesn't exist");
  }
};

function testInnerAppElement() {
  var notecontroller = new NoteController();
  notecontroller.newNote('Favourite Drink: seltzer');
  notecontroller.showNotes();
  if(document.getElementById('app').innerHTML !== '<ul><li><a id="click-link-0" href="#notes/0">Favourite Drink: sel</a></li></ul>') {
    throw new Error("InnerHTML was not changed correctly");
  }
};

function testAddFavourite() {
  var noteController = new NoteController();
  noteController.newNote('Favourite Drink: seltzer');

  if(noteController.notelist.list[0].text !== "Favourite Drink: seltzer"){
    throw new Error("Add Favourite drink function not working");
  }
};

testControllerCanBeInstantiated();
testInnerAppElement();
testAddFavourite();
