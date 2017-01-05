list = new List();
createNote(list, "Favourite drink: seltzer");
createNote(list, "A very long string just to test the functionality");
var controller = new NoteController(list);

window.addEventListener("submit", function() {
  event.preventDefault();
  var text = document.getElementById('text').value;
  controller.makeNewNote(text);
  getHTML(controller.view);
  document.getElementById('text').value = "";
});

window.addEventListener("hashchange", function () {
  controller.findNote();
  controller.changeDiv(controller.displaySingleNote());
});
getHTML(controller.view);
