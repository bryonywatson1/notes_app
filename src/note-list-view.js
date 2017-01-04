var NoteListView = function(notelist) {
  this.notelist = notelist;
}


NoteListView.prototype.view = function() {
  var string = "<ul>"
     for(var i = 0; i < this.notelist.list.length; i++){
       string += "<li>" + this.notelist.list[i].text.slice(0,20) + "</li>"
     }
     return string + "</ul>";
}

NoteListView.prototype.addNote = function(note) {
      this.notelist.storeNote(note);
    }
