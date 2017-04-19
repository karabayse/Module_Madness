// The third module should require the other two modules
var random = require('./randomnumber');
var convert = require('./convertanumber');
// (i.e. Module One and Module Two). It should also have two exported
// functions:

// The first function should call Module 2, passing the result of Module 1
// as an argument.
// The second function should return the text “Account balance: \n”.
function outputBalance() {
  // result of convertNumber here
  //random(100, 1000000);
  return convert(random(100, 1000000));
}
//console.log(outputBalance());

function outputBalance2() {
  return "Account balance: \n";
}
//console.log(outputBalance2());

module.exports = {
  converted: outputBalance,
  account: outputBalance2
};
