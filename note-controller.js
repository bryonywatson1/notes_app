(function(exports){
  function NoteController(){
  this.notelist = new NoteList();
};
NoteController.prototype.addFavourite = function(){
  this.notelist.storeNote(new Note("Favourite Drink: seltzer"));
}
NoteController.prototype.showNotes = function(){
  document.getElementById('app').innerHTML = new NoteListView(this.notelist).view();
};

NoteController.prototype.getNoteId = function(){
  return location.hash.split('/')[1]; //gets ID from URL
}

NoteController.prototype._getNoteById = function(id){
  return this.notelist.list[id]; //get note from the ID
}
NoteController.prototype.displaySingleNote = function(id){
  document.getElementById('app').innerHTML = new SingleNoteView(this._getNoteById(id)).returnHTML();
}

exports.NoteController = NoteController;
})(this);
