(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var i in names){//=0;i < names.length; i++);{
   
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j'|| firstLetter == 'J') {
byeSpeaker.speak(names[i]);
  } else {
  helloSpeaker.speak(names[i]);
  }
}
})();