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
  return createP(matchVariables(matchArrays(inputValue))).parent(output)  
}

function matchVariables(matchValue){
  var regexVariables = /([$]\w+)[_]([\w])([\w]+)?/g;
  value = matchValue;
  for(i = 0; i < 3; i++){
    var value = value.replace(regexVariables, function(){
      var argument3 = arguments[3] ? arguments[3] : '';
      return '<span style=\'background-color:rgb(255, 207, 255); cursor:pointer\'>' + arguments[1] + arguments[2].toUpperCase() + argument3 + '</span>'
    });
  }
  return value
}

function matchArrays(matchValue){
  var regexArray = /([, \(])?array\(([\w\(\)\&\;\:\-\=\,\n\.\ \/\[\]\>\'\"\$\_\+]+)\)/g;
  value = matchValue;
  for(i = 0; i < 3; i++){
    var value = value.replace(regexArray, function(){
      var argument1 = arguments[1] ? arguments[1] : '';
      return '<span style=\'background-color:rgb(255, 207, 255); cursor:pointer\'>'+ argument1 + '[' + arguments[2] + ']</span>';
    });
  }
  return value
}

function clearP(){
  outputDiv = select('#output');
  outputDiv.remove()
  var output = createP('').id('output')
  output.parent(result)
}