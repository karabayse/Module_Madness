function convertNumber(number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD'});
}
//console.log(convertNumber(1839393));
module.exports = convertNumber;
