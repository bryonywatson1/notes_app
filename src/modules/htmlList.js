(function (view) {

  function htmlList (list) {
    if (list.notes.length === 0 ) return;
    var id = 0;
    var output = ["<ul>"];
    displayNotes(list).forEach (function (note) {
      output.push('<li><div id="'+id+'">'+'<a href=#'+id+'>'+note.text.substring(0,20)+'</a></div></li>');
      note.id = id;
      id ++;
    });
    output.push("</ul>");
    return output.join("");
  }

  view.htmlList = htmlList;

})(this);
