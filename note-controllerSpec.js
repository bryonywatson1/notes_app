function testControllerCanBeInstantiated() {
  var notecontroller = new noteController();
  if(notecontroller === undefined) {
    throw new Error("notecontroller doesn't exist");
  }
};


innerHTML property of the app element contains HTML somewhat similar to: <ul><li><div>Favourite food: pesto</div></li></ul>.
(Youll need to mock some stuff to achieve this)

function testInnerAppElement() {
  var notecontroller = new noteController();
  if(notecontroller === undefined) {
    throw new Error("notecontroller doesn't exist");
  }
};
