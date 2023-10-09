// ♦  if TASKS  ♦

// TASK 1
// let value = parseInt(prompt("enter the number"));
// if (value > 0) {
//     alert(Math.round(value + 1));
// } else {
//     alert(Math.round(value));
// }

// TASK 2
// let value = parseInt(Math.round(prompt("enter the number")));
// if (value > 0) {
//     alert(value + 1);
// }
// if (value == 0) {
//     alert(`wrong number`);
// } else {
//     alert(value - 2);
// }

// TASK 3
// let value = parseInt(Math.round(prompt("enter the number")));
// if (value > 0) {
//     alert(++value);
// }
// if (value == 0) {
//     alert(value + 10);
// } else {
//     alert(value - 2);
// }

// TASK 4 and TASK 5
// let x = parseInt(Math.round(prompt(`enter the first number`)));
// let y = parseInt(Math.round(prompt(`enter the second number`)));
// let z = parseInt(Math.round(prompt(`enter the third number`)));
// if (x > 0 && y > 0 && z > 0) {
//     alert(`there are 3 positive integers`);
// }
// if (
//     (x <= 0 && y >= 0 && z >= 0) ||
//     (x >= 0 && y <= 0 && z >= 0) ||
//     (x >= 0 && y >= 0 && z <= 0)
// ) {
//     alert(`there are 2 positive and 1 negative integers`);
// }
// if (
//     (x <= 0 && y <= 0 && z >= 0) ||
//     (x >= 0 && y <= 0 && z <= 0) ||
//     (x <= 0 && y >= 0 && z <= 0)
// ) {
//     alert(`there are 1 positive and 2 negative integers`);
// } else {
//     alert(`there are only negative integers`);
// }

// TASK 6 and TASK 7
// let x = parseInt(Math.round(prompt(`enter the first number`)));
// let y = parseInt(Math.round(prompt(`enter the second number`)));
// if (x > y) {
//     alert(`${x} > ${y}`);
// }
// if (x == y) {
//     alert(`${x} = ${y}`);
// } else {
//     alert(`${x} < ${y}`);
// }

// TASK 8
// let x = parseInt(Math.round(prompt(`enter the first number`)));
// let y = parseInt(Math.round(prompt(`enter the second number`)));
// if (x > y) {
//     alert(`${x} is largest number`);
// }
// if (x == y) {
//     alert(`${x} and ${y} are equal to each other`);
// } else {
//     alert(`${y} is the smallest number`);
// }

// TASK 9
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// if (a >= b) {
//     a -= b;
//     alert(`${b} > ${a}`);
// } else {
//     b -= a;
//     alert(`${a} > ${b}`);
// }

// TASK 10
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// if (a == b) {
//     x = a + b;
//     alert(x);
// } else {
//     alert(0);
// }

// TASK 11
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// if (a > b) {
//     b = a;
//     alert(b);
// } else if (a == b) {
//     alert(0);
// } else {
//     a = b;
//     alert(a);
// }

// TASK 12
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(Math.min(a, b, c));

// TASK 13
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// x = (Math.min(a, b, c) + Math.max(a, b, c)) / 2;
// alert(x);

// TASK 14
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(`${Math.max(a, b, c)} is maximum`);
// alert(`${Math.min(a, b, c)} is minimum`);

// TASK 15
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert((a + b + c) / 2);

// BOOLEAN 1
// let a = parseInt(Math.round(prompt(`enter the number`)));
// alert(a > 0);

// BOOLEAN 2
// let a = parseInt(Math.round(prompt(`enter the number`)));
// alert(a % 2 != 0);

// BOOLEAN 3
// let a = parseInt(Math.round(prompt(`enter the number`)));
// alert(a % 2 == 0);

// BOOLEAN 4
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// alert(a > 2 && b <= 3);

// BOOLEAN 5
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// alert(a >= 0 && b < -3);

// BOOLEAN 6
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(a <= b <= c);

// BOOLEAN 7
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(a <= b <= c || a >= b >= c);

// BOOLEAN 8
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// alert(a % 2 != 0 && b % 2 != 0);

// BOOLEAN 9
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// alert(a % 2 != 0 || b % 2 != 0);

// BOOLEAN 10
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// if (a % 2 != 0) {
//     alert(`${a} is odd number`);
// } else if (b % 2 != 0) {
//     alert(`${b} is odd number`);
// } else {
//     alert(`there is no odd numbers`);
// }

// BOOLEAN 11
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// alert(a % 2 != 0 && b % 2 != 0 || a % 2 == 0 && b % 2 == 0);

// BOOLEAN 12
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert((a = b = c > 0));

// BOOLEAN 13
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(a > 0 || b > 0 || c > 0);

// BOOLEAN 14
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// if (a > 0) {
//     alert(`${a} is a positive number`);
// } else if (b > 0) {
//     alert(`${b} is a positive number`);
// } else if (c > 0) {
//     alert(`${c} is a positive number`);
// } else if ((a, b, c == 0)) {
//     alert(0);
// } else {
//     alert(`♦ error ♦`);
// }

// BOOLEAN 15
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert((a > 0 && b > 0) || (b > 0 && c > 0) || (a > 0 && c > 0));

// BOOLEAN 16
// let a = parseInt(Math.round(prompt(`enter the number`)));
// alert(a >= 10 && a <= 98 && a % 2 == 0);

// BOOLEAN 17
// let a = parseInt(Math.round(prompt(`enter the number`)));
// alert(a >= 102 && a <= 999 && a % 2 != 0);

// BOOLEAN 18
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(a == b || a == c || c == b);

// BOOLEAN 19
// let a = parseInt(Math.round(prompt(`enter the first number`)));
// let b = parseInt(Math.round(prompt(`enter the second number`)));
// let c = parseInt(Math.round(prompt(`enter the third number`)));
// alert(a == -b || a == -c || b == -c);

// BOOLEAN 20
// let a = parseInt(Math.round(prompt(`enter the number`)));
// a = a <= 987 && a >= 102;
// z = a % 10;
// y = (a % 100) - z;
// x = a - y;
// alert(a != b && a != c && b != c);

// BOOLEAN 21
// let a = parseInt(Math.round(prompt(`enter the number`)));
// let z = a % 10;
// let y = (a % 100) - z;
// let x = a - y;
// alert(x, y, z);
// ????????????

// BOOLEAN 22
