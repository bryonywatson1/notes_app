window.onload = function(){
  var nc = new NoteController();

  nc.addFavourite();
  nc.showNotes();

  window.addEventListener("hashchange", function(clickEvent){
    var id = nc.getNoteId();
    nc.displaySingleNote(id);
  })

  document.getElementById('home').addEventListener('click'), function(){
    nc.showNotes();
  }

  window.addEventListener('submit', function(submitEvent){
    submitEvent.preventDefault();
    var text = document.getElementById('text').value;
    nc.newNote(text);
    nc.showNotes();
    document.getElementById('text').value = "";
  })
}
