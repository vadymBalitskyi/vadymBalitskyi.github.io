var a = 10;
if( o < a < 5) {
    console.log(a);
}

console.log(a);

// var x = prompt ("x?", '');
// var n = prompt ("n?", '');
//
// function pow(x, n) {
//   var result = x;
//
//   if (n > 0) {
//       while (n > 1) {
//           result = result * x;
//           n--;
//       }
//       return result;
//   } else if (n < 0) {
//       n *= -1;
//       while (n > 1) {
//           result = result * x;
//           n--;
//       }
//       return 1/result;
//   } else {
//       return 1;
//   }
// }
//
// if ((x === '') || (n === '')) {
//   console.log('Порожній рядок');
// } else if (isNaN(x) || isNaN(n)) {
//   console.log('Введіть число!');
// } else if (x === null || n === null) {
//   console.log('Недійсне число!');
// } else {
//   console.log(pow(x, n));
// }


// .....................
// function pow(num, power) {
//    var result = num;
//  if (power > 0) {
//      while (power > 1) {
//          result = result * num;
//          power--;
//      }
//      return result;
//  } else if (power < 0) {
//      power *= -1;
//      while (power > 1) {
//          result = result * num;
//          power--;
//      }
//      return 1/result;
//  } else {
//      return 1;
//  }
// }
//
// var promptNumber = prompt('Input number: ');
// var userNumber = parseInt(promptNumber);
// if (isNaN(userNumber)) {
//    console.log('Number invalid!');
// } else {
//    var promptPower = prompt('Input power: ');
//    var userPower = parseInt(promptPower);
//    if (isNaN(userPower)) {
//        console.log('Power is not a number!');
//    } else {
//        console.log(pow(userNumber, userPower));
//    }
// }
