(function(exports) {
  var NoteList = function() {
    this.list = [];
  };

  NoteList.prototype.storeNote = function(note) {
    note.id = this.list.length;
    this.list.push(note);
  }

  NoteList.prototype.showList = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
