(function(exports){
  var Note = function(userNote) {
  this.text = userNote;
};

Note.prototype.returnNote = function() {
return this.text;
};

exports.Note = Note;
})(this);
