var noteList = function() {
  this.list = [];
  this.note = 'empty';
};

noteList.prototype.storeNote = function(note) {
this.list.push(note);
}

noteList.prototype.showList = function() {
return this.list;
}
