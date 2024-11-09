const repeatString = function(string, number) {
  let repeatedString = ""
  if (number < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < number; i++) {
      repeatedString += string;
    }
    return repeatedString;
  }
};

// Do not edit below this line
module.exports = repeatString;
