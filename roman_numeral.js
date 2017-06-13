function convertToRoman(num) {
  var object = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = '';
  // the  for in loop to iterates throuh  the object
  // the inside loop stacks the property onto roman and devrements
  //number within the loop by the value of the object property
  // this is elegant but not clear without comments
  for (var i in object) {
    while (num >= object[i]) {
      roman += i;
      num -= object[i];
    }
  }
  return roman;
}