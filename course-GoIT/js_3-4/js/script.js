var dom = {
  body: document.body,

  createBase: function(){
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    this.body.appendChild(wrapper);

    var item = document.createElement('div');
    item.className = 'item';
    wrapper.appendChild(item);

    var title = document.createElement('h3');
    title.className = 'title';
    title.innerHTML = 'Тест по программированию';
    item.appendChild(title);

    var ul = document.createElement('ul');
    ul.classList.add ('ul');
    item.appendChild(ul);

    for (var i = 1; i < 4; i++) {
        var questionFirst = document.createElement('li');
        questionFirst.className = 'questionFirst';
        questionFirst.innerHTML = i + '. Вопрос №' + i;

        for (var k = 1 ; k < 4; k++) {
              var ulItemFirst = document.createElement('ul');
              ulItemFirst.className = 'ulItemFirst';
              ulItemFirst.innerHTML = 'Вариант ответа №' + k;

              var choiceAnswerFirst = document.createElement('li');
              choiceAnswerFirst.className = 'choiceAnswerFirst';
              ulItemFirst.appendChild(choiceAnswerFirst);

              var checkbox = document.createElement('input');
              checkbox.className = 'checkbox';
              checkbox.type = 'checkbox';
              choiceAnswerFirst.appendChild(checkbox);

              questionFirst.appendChild(ulItemFirst);
          }

    var ulItemFirst = document.querySelector('.ulItemFirst');
    ul.appendChild(questionFirst);
    }

    var buttonItem = document.createElement('div');
    buttonItem.className = 'buttonItem';
    item.appendChild(buttonItem)

        var button = document.createElement('a');
        button.className = 'button';
        button.innerHTML = "Проверить мои результаты";
        button.href = '#';
        buttonItem.appendChild(button);
    }
};

dom.createBase();



//
// var dom = {
//     body: document.body,
//     selectedElement: null,
//     workElement: null,
//     select: function (params) {
//         this.selectedElement = document.querySelectorAll(params);
//         console.log(this.selectedElement);
//     },
//     create: function (tag) {
//         this.workElement = document.createElement(tag);
//     },
//     inner: function (html) {
//         this.workElement.innerHTML = html;
//     },
//     append: function (index) {
//         this.selectedElement[index].appendChild(this.workElement);
//     },
//     addClass: function (className) {
//         this.workElement.classList.add(className);
//     },
//     setAttr: function (attr, value) {
//         this.workElement.setAttribute(attr, value);
//     },
//     createBase: function () {
//         this.select('body');
//         this.create('form');
//         this.append(0);
//         this.select('form');
//         this.create('h2');
//         this.inner('Тест по программированию');
//         this.append(0);
//         this.create('ol');
//         this.append(0);
//         this.select('ol');
//         var ol = this.selectedElement;
//         for (var i = 0; i < 3; i++) {
//             this.selectedElement = ol;
//             this.create('li');
//             this.append(0);
//             this.select('li');
//             this.create('h5');
//             this.inner('Вопрос №' + (i + 1));
//             this.append(i);
//             for (var j = 0; j < 3; j++) {
//                 this.create('input');
//                 this.setAttr('type', 'checkbox');
//                 this.setAttr('id', 'input' + (j + 1));
//                 console.log(this.workElement);
//                 this.append(i);
//                 this.create('label');
//                 this.setAttr('for', 'input' + (j + 1));
//                 // document.body.innerText
//                 this.workElement.innerText = 'Вариант ответа №' + (j + 1);
//                 // dom.inner = 'Вариант ответа №' + (j + 1);
//                 console.log(this.workElement);
//                 this.append(i);
//                 this.create('div');
//                 this.addClass('clearfix');
//                 console.log(this.workElement);
//                 this.append(i);
//             }
//         }
//         this.select('body');
//         this.create('input');
//         this.setAttr('type', 'submit');
//         this.setAttr('value', 'Проверить мои результаты');
//         this.addClass('btn');
//         this.append(0);
//     }
// };
//
// dom.createBase();





// _________________________________________
// var wrapper = document.createElement('div');
// wrapper.className = 'wrapper';
// document.body.appendChild(wrapper);
//
// var item = document.createElement('div');
// item.className = 'item';
// document.body.appendChild(item);
//
// var obj = {
//   questionFirst: i + '. Вопрос №' + i
//   // ulItemFirst: 'Вариант ответа №' + k
// }
//
// var title = document.createElement('h3');
// title.className = 'title';
// title.innerHTML = 'Тест по программированию';
// document.body.appendChild(title);
//
// var ul = document.createElement('ul');
// ul.classList.add ('ul');
// document.body.appendChild(ul);
//
// for (var key in obj) {
// for (var i = 1; i < 4; i++) {
//     var questionFirst = document.createElement('li');
//     questionFirst.className = 'questionFirst';
//     questionFirst.innerHTML = i + '. Вопрос №' + i;
//
//     for (var k = 1 ; k < 4; k++) {
//           var ulItemFirst = document.createElement('ul');
//           ulItemFirst.className = 'ulItemFirst';
//           ulItemFirst.innerHTML = 'Вариант ответа №' + k;
//
//           var choiceAnswerFirst = document.createElement('li');
//           choiceAnswerFirst.className = 'choiceAnswerFirst';
//           ulItemFirst.appendChild(choiceAnswerFirst);
//
//           var checkbox = document.createElement('input');
//           checkbox.className = 'checkbox';
//           checkbox.type = 'checkbox';
//           // checkbox.innerHTML = 'Вариант ответа №' + k;
//           choiceAnswerFirst.appendChild(checkbox);
//
//           questionFirst.appendChild(ulItemFirst);
//       }
//
// var ulItemFirst = document.querySelector('.ulItemFirst');
// ul.appendChild(questionFirst);
// }
// }
//
// var buttonItem = document.createElement('div');
// buttonItem.className = 'buttonItem';
// document.body.appendChild(buttonItem)
//
//     var button = document.createElement('a');
//     button.className = 'button';
//     button.innerHTML = "Проверить мои результаты";
//     button.href = '#';
//     document.body.appendChild(button);
//
// var buttonItem = document.querySelector('.buttonItem');
// buttonItem.appendChild(button);
//
// var item = document.querySelector('.item');
// item.appendChild(title);
// item.appendChild(ul);
// item.appendChild(buttonItem)
//
// var wrapper = document.querySelector('.wrapper');
// wrapper.appendChild(item);
