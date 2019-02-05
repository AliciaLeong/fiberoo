function fib() {
  let old = 0;
  let cur = 1;
  let next = 0;

  const arr = [0];

  for (let i = 1; i < 100; i++) {
    next = old + cur;
    old = cur;
    arr.push(cur);
    cur = next;
  }
  return arr;
}

console.log(fib());

const fullarr = fib();

function numsToString(array) {
  return _.map(array, function (num) { return `${num}`; });
}

console.log(numsToString(fullarr));

function numToEven(arr) {
  const temp = _.filter(arr, function (element) { return element % 2 === 0; });
  return temp.length;
}

console.log(numToEven(fullarr));
