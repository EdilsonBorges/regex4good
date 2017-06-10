function setup() {
  noCanvas();

  input = select('#textinput');
  button = select('#submit');
  button.mousePressed(newText);

}

function newText() {
  var s = input.value()
  var regex = /(\W+)/g;
  var words = s.split(regex)
  for(i = 0;i < words.length;i++){
    var span = createSpan(words[i])
    span.parent(output)
    if(/(\w+)/.test(words[i])){
      span.style('background-color','rgb(255, 207, 255)')
    }
  }
}
