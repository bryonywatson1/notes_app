function testCanInstantiateSingleNoteView() {
  var singleNoteView = new SingleNoteView();
  if (singleNoteView === undefined){
    throw new Error('SingleNoteView has not been instantiated')
  }
};

function testTakesNoteModelOnInstantiation() {
  var note = { text : "Note model"};
  var singleNoteView = new SingleNoteView(note);
  if (singleNoteView.note !== note ){
    throw new Error('Does not take note model on instantiation')
  }
};

function testReturnsHTMLString() {
  var note = { text : "Note model"};
  var singleNoteView = new SingleNoteView(note);
  if (singleNoteView.returnHTML() !== "<div>Note model</div>"){
    throw new Error('Does not return string of HTML')
  }
};

testCanInstantiateSingleNoteView();
testTakesNoteModelOnInstantiation();
testReturnsHTMLString();
