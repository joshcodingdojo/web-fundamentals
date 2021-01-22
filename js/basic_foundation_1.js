// Get 1 - 255
function getOneToTwoFiftyFive() {
  var finalArr = [];
  for (var i = 1; i < 256; i++) {
    finalArr.push(i);
  }
  return finalArr;
}

// 2. Get even 1000
function getEvenOneThousand() {
  var sum = 0;
  for (var i = 1; i < 1001; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
}

function sumOddFiveThousand() {
  var sum = 0;
  for (var i = 1; i < 1001; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}

const sumOfValsInArray = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

function maxOfArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findAvg(arr) {
  var sum = 0;
  var n = arr.length;
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / n;
  return avg;
}

function arrayOddFifty() {
  var odds = [];
  for (var i = 1; i < 51; i++) {
    if (i % 2 === 1) {
      odds.push(i);
    }
  }
  return odds;
}

function greaterThanY(y) {
  var arr = [34, 24, 1, 56, 3, 5, 7, 11, 14, 16, 18, 20];
  var greaterThan = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      greaterThan.push(arr[i]);
    }
  }
  return greaterThan;
}

function squares(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
  return arr;
}

function negatives(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}

function maxMinAvg(arr) {
  var final = [];
  var sum = 0;
  var n = arr.length;
  var avg = 0;
  var max = arr[0];
  var min = arr[0];

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  avg = sum / n;
  final.push(max);
  final.push(min);
  final.push(avg);
  return final;
}

function swapValues(arr) {
  var lastIdxVal = 0;
  for (var i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      console.log();
      lastIdxVal = arr[i];
      arr[i] = arr[0];
    }
  }

  arr[0] = lastIdxVal;
  return arr;
}
