const removeFromArray = function(array, ...argument) {
  return array.filter((e) => !argument.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
