list = new List();
createNote(list, "Favourite drink: seltzer");
createNote(list, "A very long string just to test the functionality");
var controller = new NoteController(list);
getHTML(controller.view);

window.addEventListener("hashchange", function () {
  controller.findNote();
  controller.changeDiv(controller.displaySingleNote());
});

window.addEventListener("submit", function() {
  event.preventDefault();
  var text = document.getElementById('text').value;
  console.log(text);
})
