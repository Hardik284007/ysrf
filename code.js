var windowWidth = 400;
var windowHeight = 400;
createCanvas("canvas", windowWidth, windowHeight);
onEvent("calculatebutton", "click", function( ) {
  if (getText("symboldropdown") == "+") {
    setNumber("answerarea", getNumber("firsttextinput") + getNumber("secondtextinput"));
  }
  if (getText("symboldropdown") == "-") {
    setNumber("answerarea", getNumber("firsttextinput") - getNumber("secondtextinput"));
  }
  if (getText("symboldropdown") == "*") {
    setNumber("answerarea", getNumber("firsttextinput") * getNumber("secondtextinput"));
  }
  if (getText("symboldropdown") == "/") {
    setNumber("answerarea", getNumber("firsttextinput") / getNumber("secondtextinput"));
  }
});
