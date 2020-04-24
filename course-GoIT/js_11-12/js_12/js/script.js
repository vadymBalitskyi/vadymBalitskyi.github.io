$(function () {

  var html = $('#test').html();

  var moreInformation = {
    title__h1: 'Балицкий Вадим Владимирович',
    title__h4: 'Cтудент НТУ(заочно), работаю логистом у агроперевозках',
    title__h2: 'Хочу учить фронтенд, потому что:',
    paragraph__first: 'Логистика - стрессовая работа',
    paragraph__second: 'Платят мало',
    title__h3: 'Мой контактний телефон',
    content: '+380991465842'
    
    // information: [
    //   {
    //     },
    //     {
    //       title__h3: 'Мой пр  офиль Facebook',
    //       content: 'www.facebook.com/vadim.balitskyi'
    //     },
    //     {
    //       title__h3: 'Мой фидбек',
    //       content: 'Могу сверстать сайт'
    //     }
    // ];
  };

  var content = tmpl(html, moreInformation);

  $('body').append(content);
});
