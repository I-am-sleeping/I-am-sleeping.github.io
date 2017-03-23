function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a/b;
}

function intDiv(a, b) {
  var res = a/b;
  return res < 0 ? Math.ceil(res) : Math.floor(res);
}

console.log(sum(1, 2));
console.log(sum(1, true));
console.log(sum(1, "2"));
console.log(sum(1));
console.log(sum());

console.log("sub()");
console.log(sub(1, 2));
console.log(sub(true, 1));
console.log(sub("2", 1));
console.log(sub("one", 1));

console.log("mul()");
console.log(mul(false, 3));
console.log(mul("2", 3));
console.log(mul("two", 3));

console.log("div()");
console.log(div(10, "2"));
console.log(div(10, 3));
console.log(div(10, false));

console.log("intDiv()");
console.log(intDiv(10, "3"));
console.log(intDiv(-10, 3));
console.log(intDiv("3", 4));
console.log(intDiv(10, false));
console.log(intDiv(0, false));
console.log(intDiv("ten", true));