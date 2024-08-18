function findSum(params) {
  let ans = 0;
  for (let i = 0; i < params; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000);
console.log("Hello World");
