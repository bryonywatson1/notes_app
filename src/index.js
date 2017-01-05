list = new List();
createNote(list, "Favourite drink: seltzer");
createNote(list, "A very long string just to test the functionality");
var controller = new NoteController(list);
getHTML(controller.view);

window.addEventListener("hashchange", function () {
  controller.findNote();
  controller.changeDiv(controller.displaySingleNote());
});
