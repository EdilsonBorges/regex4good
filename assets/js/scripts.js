function setup() {
  noCanvas()
  input = select('#textinput');
  button = select('#submit');
  newText()
  input.input(newText)
}

function newText() {
  clearP()
  var inputValue = input.value().replace(/\n/g, '<br>').replace(/\s/g, '&nbsp;');
  var regexArray = /([, \(])?array\(([a-zA-Z0-9\-\=\,\n\.\ \/\[\]\>\'\"\$\_\*]*)\)/g;
  var wordsReplace = inputValue.replace(regexArray, function(){
    var argument1 = arguments[1] ? arguments[1].toLowerCase() : '';
     return '<span style=\'background-color:rgb(255, 207, 255); cursor:pointer\'>'+ argument1 + '[' + arguments[2] + ']</span>';
  });
  return createP(matchVariables(wordsReplace)).parent(output)  
}

function matchVariables(value){
  var regexVariables = /([$]\w+)[_]([\w])([\w]+)?/g;
  return value.replace(regexVariables, function(){
    var argument3 = arguments[3] ? arguments[3].toLowerCase() : '';
    var matchedWords = arguments[1].toLowerCase() + arguments[2].toUpperCase() + argument3;
    return '<span style=\'background-color:rgb(255, 207, 255); cursor:pointer\'>'+matchedWords+'</span>'
  });
}

function clearP(){
  outputDiv = select('#output');
  outputDiv.remove()
  var output = createP('').id('output')
  output.parent(result)
}
