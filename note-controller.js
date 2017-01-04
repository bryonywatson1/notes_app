function NoteController(){
  this.notelist = new NoteList();
};
NoteController.prototype.addFavourite = function(){
  this.notelist.storeNote(new Note("Favourite Drink: seltzer"));
}
NoteController.prototype.showNotes = function(){
  document.getElementById('app').innerHTML = new NoteListView(this.notelist).view();
};
