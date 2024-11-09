const sumAll = function(firstInt, secondInt) {
  if(!Number.isInteger(firstInt) ||
    !Number.isInteger(secondInt) ||
    firstInt < 0 || secondInt < 0)
  { return 'ERROR';
  } else {
    array = [firstInt, secondInt].sort();
    let sum = 0;
    for (let i = array[0]; i <= array[1]; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
