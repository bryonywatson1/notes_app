window.onload = function(){
  var nc = new NoteController();

  nc.addFavourite();
  nc.showNotes();

  document.getElementById('app').addEventListener("click", function(clickEvent){
    var id = nc.getNoteId();
    nc.displaySingleNote(id);
  })
}
