function setup() {
  noCanvas()
  input = select('#textinput');
  button = select('#submit');
  newText()
  input.input(newText)
}

function newText() {
  clearP()
  var inputValue = input.value();
  var regexVariables = /([$]\w+)[_]([\w])([\w]+)?/g;
  var regexArray = /([, \(])array\(([a-zA-Z0-9\-\=\,\n\.\ \/\[\]\>\'\"\$\_\*]*)\)/g;
  var wordsReplace = inputValue.replace(regexVariables, function(){
    var argument3 = arguments[3] ? arguments[3].toLowerCase() : '';
    var matchedWords = arguments[1].toLowerCase() + arguments[2].toUpperCase() + argument3;
    return '<span style=\'background-color:rgb(255, 207, 255)\'>'+matchedWords+'</span>'
  });
    var p = createP(wordsReplace)
    return p.parent(output)
}

function clearP(){
  outputDiv = select('#output');
  outputDiv.remove()
  var output = createP('').id('output')
  output.parent(result)
}
