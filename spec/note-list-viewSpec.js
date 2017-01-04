function testNoteListView() {
  var notelistview = new NoteListView(new NoteList);
  if(notelistview === undefined) {
    throw new Error("notelistview doesn't exist");
  }
};

function testNoteShowsUpInNoteList() {
var notelistview = new NoteListView(new NoteList);
notelistview.addNote({ text: "My name is Bryony" });
if(notelistview.view() !== "<ul><li><a id='click-link-0' href='#notes/0'>My name is Bryony</a></li></ul>"){
  console.log ( notelistview.view() );
  throw new Error("list does not contain My name is Bryony")
}
};

function testNoteCropsStringAt20Chars(){
  var notelistview = new NoteListView(new NoteList);
  notelistview.addNote({ text: "My name is Bryony" });
  notelistview.addNote({ text: "This string will be over 20 chars long"})

  if(notelistview.view() !== "<ul><li><a id='click-link-0' href='#notes/0'>My name is Bryony</a></li><li><a id='click-link-1' href='#notes/1'>This string will be </a></li></ul>" ){
    throw new Error("List is not being sliced apart >:3")
  }
};

testNoteListView();
testNoteShowsUpInNoteList();
testNoteCropsStringAt20Chars();
