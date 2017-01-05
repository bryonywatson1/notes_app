list = new List();
var controller = new NoteController(list);

window.addEventListener("submit", function() {
  event.preventDefault();
  var text = document.getElementById('text').value;
  controller.makeNewNote(text);
  getHTML(controller.view);
  document.getElementById('text').value = "";
});

window.addEventListener("hashchange", function () {
  if(window.location.href === "http://localhost:8080/") {
    getHTML(controller.view);
  }
  else {
    controller.findNote();
    controller.changeDiv(controller.displaySingleNote());
  }
});
getHTML(controller.view);
