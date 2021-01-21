// 1. Print vals and sum
var testArr = [6, 3, 5, 1, 2, 4];

var sum = 0;
for (var i = 0; i < testArr.length; i++) {
  sum += testArr[i];
  console.log(`Num: ${i}, Sum: ${sum}`);
}

// 2. value * position
for (var i = 0; i < testArr.length; i++) {
  testArr[i] = testArr[i] * i;
}
console.log(testArr);
