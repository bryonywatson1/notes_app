window.onload = function(){
  var nc = new NoteController();

  nc.newNote('Favourite Drink: seltzer');
  nc.showNotes();

  window.onhashchange = function(clickEvent){
    var id = nc.getNoteId();
    nc.displaySingleNote(id);
  }

  document.getElementById("home").addEventListener("click", function(clickEvent){
    nc.showNotes();
  })

  window.addEventListener('submit', function(submitEvent){
    submitEvent.preventDefault();
    var text = document.getElementById('text').value;
    nc.newNote(text);
    nc.showNotes();
    document.getElementById('text').value = "";
  })
}
