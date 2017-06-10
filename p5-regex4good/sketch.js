// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/



// Here is where we are working with a regex
function process(txt) {

  var regex = /\(?(\d{3})\)?[-.](\d{4})/g;
  var tokens = txt.replace(regex, function(){
      
      console.log(arguments)
       return '(tel: '+arguments[1]+'-'+arguments[2]+')'
  })

  var output = tokens;  
  var par1 = createP(output);
  par1.class('text');

}


/***************************************************/
/* Everything below just handles the text input ****/
/***************************************************/


function setup() {

  noCanvas();

  // Selecting the text field and button
  input = select('#textinput');
  button = select('#submit');
  // What to do when button pressed
  button.mousePressed(handleInput);

  // loadStrings('files/rainbow.txt', fileLoaded);

  regexInput = select('#regex');
  globalCheck = select('#global');
  caseCheck = select('#case');
}


// When the file is loaded
function fileLoaded(data) {
  var txt = data.join('\n');
  input.html(txt);
}

// Handle the text input field
function handleInput() {
  process(input.value());
}