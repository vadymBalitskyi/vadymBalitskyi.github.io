var a = 10;
if( o < a < 5) {
    console.log(a);
}

console.log(a);

// var arr = [''];
//
// for (var i = 0; i < 5; i++) {
//   arr[i] = prompt('Введіть ім\'я для присвоєння в масив');
//   if (arr[i] == null) {
//     alert('Недійсне значення!');
//     break;
//   } else if (arr[i] === '') {
//     alert('Порожній рядок!');
//     break;
//   }
// }
//
// var myName = prompt('Введіть ім\'я користувача');
// if (!login(myName)) {
//    alert("В доступі відмовлено!");
// }
//
// function login(arr) {
//   for (var i = 0; i < 5; i++) {
//     if (arr[i] === myName) {
//       console.log(myName + ' Вітаю, ви увійшли!');
//       key = true;
//       return true;
//     }
//     return false;
//   }
// }

// if (key === true) {
//   alert(myName + ' Вітаю! ви увійшли ');
// } else {
//   alert('Error');
// }

// var names = [5];
// for (var i = 0; i < 5; i++) {
//    var name = prompt('Input name ' + (i + 1) + ': ');
//    if (name === '') {
//        console.log('buy buy!');
//        break;
//    }
//    else {
//        names[i] = name;
//    }
// }
//
// var userName = prompt("Input username: ");
// if (!compareNames(userName)) {
//    alert("Error!\nUser not found");
// }
//
// function compareNames(name) {
//    for (var i = 0, l = names.length; i < l; i++) {
//        if (names[i] == name) {
//            alert(name + ', вы успешно вошли');
//            return true;
//        }
//    }
//    return false;
// }
