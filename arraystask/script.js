function isArray1(a) {
  return Array.isArray(a);
}

function isArray2(a) {
  return a instanceof Array;
}

function isArray3(a) {
  return Object.prototype.toString.call(a) == '[object Array]';
}

function range(a, b) {
  var result = [];
  if ("undefined" == typeof b) {
    b = a;
    a = 0;
  }
  for (var i = a; i < b; i++) {
    result.push(i);
  }
  return result;
}

function compact1(a) {
  return a.filter(Boolean);
}

function compact2(a) {
  var truthy = [];
  for (var i = 0; i < a.length; i++) {
    if (Boolean(a[i])) {
      truthy.push(a[i]);
    }
  }
  return truthy;
}

function sum1(a) {
  var add = function(x, y) {
    return x + y;
  };
  return a.reduce(add, 0);
}

function sum2(a) {
  var res = 0;
  for (var i = 0; i < a.length; i++) {
    res += a[i];
  }
  return res;
}

function unique(a) {
  var uni = function(value, index, self) {
    return self.indexOf(value) === index;
  }
  return a.filter(uni);
}

function last(a) {
  return a[a.length - 1];
}

function excludeLast(a, b) {
  if ("undefined" == typeof b) {
    b = 1;
  }
  for (var i = 0; i < b; i++) {
    a.pop();
  }
  return a;
}

var arr = [1, 2, 3, 4, 5];
var falsy = ["", 2, false, NaN, "string", 0, null, undefined, 9];
console.log(isArray1(arr));
console.log(isArray2(arr));
console.log(isArray3(arr));
console.log(range(5));
console.log(range(2, 5));
console.log(compact1(falsy));
console.log(compact2(falsy));
console.log(sum1(arr));
console.log(sum2(arr));
console.log(unique([1, 2, 2, 3, 4, 4, 5]));
console.log(last(arr));
console.log(excludeLast(arr, 2));
console.log(excludeLast(arr));
