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
  var regexSpace = /\s/g;
  var regexVariables = /([$]\w+)[_]([\w])([\w]+)?/g;
  var regexArray = /([, \(])array\(([a-zA-Z0-9\-\=\,\n\.\ \/\[\]\>\'\"\$\_\*]*)\)/g;
  var words = inputValue.split(regexSpace);
  var wordsReplace = inputValue.replace(regexVariables, function(r){
    console.log(arguments)
    var argument3 = arguments[3] ? arguments[3].toLowerCase() : '';
    return arguments[1].toLowerCase() + arguments[2].toUpperCase() + argument3;
  });
  console.log(wordsReplace)
  for (i = 0;i < words.length;i++) {
    if (regexVariables.test(words[i])) {
      var replacedMatchVariables = words[i].replace(regexVariables, function(){
        var argument3 = arguments[3] ? arguments[3].toLowerCase() : '';
        return arguments[1].toLowerCase() + arguments[2].toUpperCase() + argument3;
      })
      var span = createSpan(replacedMatchVariables + ' ')
      span.style('background-color','rgb(255, 207, 255)')
    } else if (regexArray.test(words[i])) {
      var replacedMatchArray = words[i].replace(regexArray, function(){
        console.log(arguments)
        return arguments[1] + '[' + arguments[2] + ']';
      })
      var span = createSpan(replacedMatchArray + ' ')
      span.style('background-color','rgb(255, 207, 255)')
    } else {
      var span = createSpan(words[i] + ' ')

    }
    span.parent(output)
  }
}

function clearP(){
  outputDiv = select('#output');
  outputDiv.remove()
  var output = createP('').id('output')
  output.parent(result)
}
