function binarySearch(arr, number) {
  if (arr.length == 1) {
    if (arr[0] == number) {
      return 0;
    } else {
      return number > arr[0] ? -2 : -1;
    }
  }
  var mid = Math.floor(arr.length / 2);
  if (number - arr[mid] < 0) {
    return binarySearch(arr.slice(0, mid), number);
  } else if (number - arr[mid] > 0) {
    var tmp = binarySearch(arr.slice(mid), number);
    if (tmp < 0) {
      return tmp - mid;
    } else {
      return tmp + mid;
    }
  } else {
    return mid;
  }
}

var a = [0, 1, 11, 2, 4, 5, 6, 7, 8, 9, 10];
a.sort(function(a, b) { return a - b; });
console.log(a);
console.log(binarySearch(a, 2));
console.log(binarySearch(a, 11));
console.log(binarySearch(a, 3));
console.log(binarySearch(a, 15));
console.log(binarySearch([1], 15));
console.log(binarySearch([1], -15));