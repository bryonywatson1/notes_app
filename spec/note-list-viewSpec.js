function testNoteListView() {
  var notelistview = new noteListView(new noteList);
  if(notelistview === undefined) {
    throw new Error("notelistview doesn't exist");
  }
};

function testNoteShowsUpInNoteList() {
var notelistview = new noteListView(new noteList);
notelistview.addNote({ text: "My name is Bryony" });
if(notelistview.view() !== "<ul><li>My name is Bryony</li></ul>"){
  throw new Error("list does not contain My name is Bryony")
}
};



testNoteListView();
testNoteShowsUpInNoteList();
