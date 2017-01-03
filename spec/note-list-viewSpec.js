function testNoteListView() {
  var notelistview = new noteListView(new noteList);
  if(notelistview === undefined) {
    throw new Error("notelistview doesn't exist");
  }
};

function testShowsTextWhenMethodCalled() {
  var notelistview = new noteListView(new noteList);
  if(notelistview.htmlString() != "<ul></ul>") {
    throw new Error("notelistview doesn't show empty html list");
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
testShowsTextWhenMethodCalled();
testNoteShowsUpInNoteList();
