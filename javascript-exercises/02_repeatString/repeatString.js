const repeatString = function(string, number) {
  let finalString = '';
  if (number < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < number; i++) {
      finalString += string;
    }
    return finalString;
  }
};

// Do not edit below this line
module.exports = repeatString;
