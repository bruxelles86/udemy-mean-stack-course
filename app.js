require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Will")

var answer = question.ask("What's the meaning of life?")
console.log(answer)

goodbye();