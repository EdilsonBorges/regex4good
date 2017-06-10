function setup() {
  noCanvas();

  input = select('#textinput');
  button = select('#submit');
  button.mousePressed(newText);

}

function newText() {
  var s = input.value()
  var regex = /\W+/g;
  var words = s.split(regex)
  for(i = 0;i < words.length;i++){
    createSpan(words[i])
  }
}
