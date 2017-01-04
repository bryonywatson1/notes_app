var NoteListView = function(notelist) {
  this.notelist = notelist;
}


NoteListView.prototype.view = function() {
  var string = "<ul>"
     for(var i = 0; i < this.notelist.list.length; i++){
       var note = this.notelist.list[i];
       string += "<li><a id='click-link-" + note.id + "' " +
       "href='#notes/"+note.id + "'>" +
       note.text.slice(0,20) + "</a></li>"
     }
     return string + "</ul>";
}

NoteListView.prototype.addNote = function(note) {
      this.notelist.storeNote(note);
    }
