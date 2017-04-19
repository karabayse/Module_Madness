function randomNumber(min, max){
  //var min = 100;
  //var max = 1000000;
      return Math.floor(Math.random() * (1 + max - min) + min);

  }
//console.log(randomNumber(100, 1000000));
//var foo = randomNumber(100, 1000000);
//console.log(foo);
// to make the module available --> our current module is represented
// by 'module'
module.exports = randomNumber;
