/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(!n) return 1;
	if(n < 0) return null;
	return n * factorial(--n);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if(!array.length) return 0;
	return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if(!array.length) return 0;
	if(array[0].constructor === Array) return arraySum(array[0]) + arraySum(array.slice(1));
	return array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
var isEven = function(n) {
	if(!n) return true;
	if(n === 1) return false;
	return n < 0 ? isEven(n + 2) : isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	return n === 0 ? 0 : !n ? null : n < 0 ? ++n + sumBelow(n) : --n + sumBelow(n);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if(x === y || (y > x && y - x === 1) || (y < x && y - x === -1)) return [];
	return y > x ? [++x].concat(range(x, y)) : [--x].concat(range(x, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if(!exp) return 1;
	//The following line of code optimizes for even exponents, but gives me a number off by 0.0000000000000000007 when computing exponent(5, -4)
	//if(isEven(exp)) return exponent(base, exp / 2) * exponent(base, exp / 2);
	else return exp < 0 ? exponent(base, ++exp) / base : base * exponent(base, --exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if(n === 1) return true;
	if(n < 1) return false;
	return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if(!string.length) return '';
	return string.slice(-1) + reverse(string.slice(0, -1))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.replace(/ /g, '').toLowerCase();
	if(!string.length || string.length === 1) return true;
	if(string[0] === string.slice(-1)) return palindrome(string.slice(1, -1));
	return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(y === 0) return NaN;
	if(x >= 0 && y < 0) y = -y;
	if(x < 0 && y > 0) y = -y;
	if((x >= 0 && x < y) || (x < 0 && x > y)) return x;
	return modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if(y === 1) return x;
	if(!y || !x) return 0;
	if(y === -1) return -x;
	return y < 0 ? multiply(x, ++y) - x : x + multiply(x, --y);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
	if((y > 0 && x < y && -x < y) || (y < 0 && x > y && -x > y)) return 0;
	if(!y) return NaN;
	if(!x) return 0;
	if(y < 0 && x > y && -x > y) return 0;
	return x < 0 ? divide(x + y, y) - 1 : 1 + divide(x - y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if(x < 0 || y < 0) return null;
  if(!x) return y;
  if(!y) return x;
  return x > y ? gcd(x % y, y) : gcd(x, y % x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if(!str1.length && !str2.length) return true;
  if(str1[0] !== str2[0]) return false;
  return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  return !str.length ? [] : [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  return !array.length ? [] : array.slice(-1).concat(reverseArr(array.slice(0, -1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  return !length ? [] : [value].concat(buildList(value, --length));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  return !n ? [] : fizzBuzz(n - 1).concat([((n % 3 === 0 && n % 5 === 0) && 'FizzBuzz') || (n % 3 === 0 && 'Fizz') || (n % 5 === 0 && 'Buzz') || ('' + n)]);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  return !array.length ? 0 : +(array[0] === value) + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  return !array.length ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let getAllKeys = function(obj){
  let key = Object.keys(obj)[0];
  return !key ? [] : (obj[key].constructor === Object ? [key].concat(getAllKeys(Object.assign({}, obj[key]))) : [key]).concat(getAllKeys((delete obj[key]) && obj));
};
var countKeysInObj = function(obj, key) {
  let keys = obj.constructor === Object ? getAllKeys(Object.assign({}, obj)) : obj;
  return !keys.length ? 0 : +(keys[0] === key) + countKeysInObj(keys.slice(1), key);
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let getAllVals = function(obj){
  let key = Object.keys(obj)[0];
  return !key ? [] : (obj[key].constructor === Object ? getAllVals(Object.assign({}, obj[key])) : [obj[key]]).concat(getAllVals((delete obj[key]) && obj));
};
var countValuesInObj = function(obj, value) {
  let vals = obj.constructor === Object ? getAllVals(Object.assign({}, obj)) : obj;
  return !vals.length ? 0 : +(vals[0] === value) + countValuesInObj(vals.slice(1), value);
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  $.each(obj, function(key, val){
    if(val.constructor === Object) replaceKeysInObj(val, oldKey, newKey);
    if(key === oldKey){
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
  });
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  return n <= 0 ? null : n === 1 ? [0, 1] : fibonacci(n - 1).concat(nthFibo(n));
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  return n < 0 ? null : n === 0 ? 0 : n === 1 || n === 2 ? 1 : nthFibo(--n) + nthFibo(--n);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  return !array.length ? [] : [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  return !array.length ? [] : [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  return Object.values(obj).reduce(function(sum, val){
    if(val.constructor === Object) return nestedEvenSum(val) + sum;
    return val.constructor === Number && isEven(val) ? val + sum : sum;
  }, 0);
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  return !array.length ? [] : (array[0].constructor === Array ? flatten(array[0]) : [array[0]]).concat(flatten(array.slice(1)));
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if(!obj) obj = {};
  if(!str.length) return obj;
  obj[str[0]] = obj[str[0]] ? obj[str[0]] + 1 : 1;
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  return !list.length ? [] : (list[0] === list[1] ? [] : [list[0]]).concat(compress(list.slice(1)));
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  return !array.length ? [] : [array[0].concat([aug])].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  return !array.length ? [] : (!array[0] && !array[1] ? [] : [array[0]]).concat(minimizeZeroes(array.slice(1)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  return !array.length ? [] : alternateSign(array.slice(0, -1)).concat([Math.abs(array.slice(-1)[0]) * (isEven(array.length) ? -1 : 1)]);
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let getNumAsString = function(num){
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return numbers[num];
}
var numToText = function(str) {
  return !str.length ? '' : (!+str[0] ? str[0] : getNumAsString(+str[0])) + numToText(str.slice(1));
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node = document) {
  tag = tag.constructor === String ? $(node).find(tag) : tag;
  return !tag.length ? 0 : 1 + tagCount(tag.slice(1), node);
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min = 0, max = array.length - 1) {
  let guess = Math.floor((min + max) / 2);
  return array[guess] === target ? guess : min >= max ? null : array[guess] < target ? binarySearch(array, target, guess + 1, max) : binarySearch(array, target, min, guess - 1);
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
