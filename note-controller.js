function noteController(){
  this.notelist = new noteList();
};
noteController.prototype.addFavourite = function(){
  this.notelist.add(new Note("Favourite Drink: seltzer"));
}
noteController.prototype.showNotes = function(){
  document.getElementById('app').innerHTML = new noteListView(this.notelist).view();
};
