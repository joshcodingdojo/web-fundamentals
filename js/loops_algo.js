// 1. Print odds 1-20
for (var i = 1; i < 21; i += 2) {
  console.log(i);
}

// 2. sum and print to 5
for (let i = 1; i < 6; i++) {
  var sum = 0;
  for (j = 0; j < i + 1; j++) {
    sum += j;
  }
  console.log("Num:", i, " Sum:", sum);
}
