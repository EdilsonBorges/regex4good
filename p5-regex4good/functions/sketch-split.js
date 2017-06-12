function setup() {
  noCanvas()
  input = select('#textinput');
  button = select('#submit');
  newText()
  input.input(newText)
}

function newText() {
  clearP()
  var inputValue = input.value()
  var regexSpace = /\s/g;
  var regexVariables = /([$]\w+)[_]([\w])([\w]+)?/g;
  var words = inputValue.split(regexSpace)
  for(i = 0;i < words.length;i++){
    if(regexVariables.test(words[i])){
      teste = words[i].replace(regexVariables, function(){
        var argument3 = arguments[3] ? arguments[3].toLowerCase() : ''
        return arguments[1].toLowerCase()+arguments[2].toUpperCase()+argument3;
      })
      var span = createSpan(teste+' ')
      span.style('background-color','rgb(255, 207, 255)')
    } else {
      var span = createSpan(words[i]+' ')

    }
    span.parent(output)
  }
}

function clearP(){
  outputDiv = select('#output');
  outputDiv.remove()
  createP('').id('output')
}
