var NoteController = function(list) {
  this.view = new View(list);
  this.currentNote = 0;
};

NoteController.prototype =  {
  changeDiv: function(text) {
    var elem = document.getElementById('app');
    elem.innerHTML = text;
  },

  getId: function () {
    return window.location.hash.split("#")[1];
  }
};

NoteController.prototype.findNote = function () {

    var list = this.view.list.notes;
    for(var i = 0; i < list.length; i++ ) {
      if (list[i].id.toString() === this.getId()) {
        this.currentNote = list[i];
      }
    }
    return this.currentNote;
};

NoteController.prototype.displaySingleNote = function () {
  var singleNote = new SingleNoteViewObject(this.findNote());
  return singleNote.displayHTML();
};
