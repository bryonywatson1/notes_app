(function(exports) {
  var NoteList = function() {
  this.list = [];
  this.note = 'empty';
};

NoteList.prototype.storeNote = function(note) {
this.list.push(note);
}

NoteList.prototype.showList = function() {
return this.list;
};

exports.NoteList = NoteList;
})(this);
