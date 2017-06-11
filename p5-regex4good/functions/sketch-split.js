function setup() {
  noCanvas()
  input = select('#textinput');
  button = select('#submit');
  newText()
  input.input(newText)
}

function newText() {
  clearP()
  var s = input.value()
  var regex = /\s/g;
  var words = s.split(regex)
  for(i = 0;i < words.length;i++){
    var span = createSpan(words[i]+' ')
    if(/([$]\w+)[_]([\w])([\w]+)/g.test(words[i])){
      span.style('background-color','rgb(255, 207, 255)')
    }
    span.parent(output)
  }
}

function clearP(){
  outputDiv = select('#output');
  outputDiv.remove()
  createP('').id('output')
}
