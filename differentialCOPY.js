// returns values uniqe to each array

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
// itterate through arry for each element check if value exists in second array if so push to new array
  var newArr1 = arr1.filter(function(value) {
  // indexOf returns -1 if the value is not found
    if (arr2.indexOf(value) == -1) {
      newArr.push(value);
    }
  });
  
  var newArr2 = arr2.filter(function(value) {
    if (arr1.indexOf(value) == -1) {
      newArr.push(value);
    }
  });
  
  return newArr;
}