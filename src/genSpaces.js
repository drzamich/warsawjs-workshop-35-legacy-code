// Generate c spaces
module.exports = function genSpaces(c) {
  let string = '';
  for (let x = 1; x < c; x += 1) {
    string += ' ';
  }
  return string;
};
