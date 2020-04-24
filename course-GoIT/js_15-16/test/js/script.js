'user strict';

$(function(){

	$('.show-resultation').on('click', function(e){
		let questions = JSON.parse(localStorage.getItem('questionsArr'));
		let rightAnsvers = JSON.parse(localStorage.getItem('rightAnsversArr'));
		e.preventDefault();
		let r = []
		for (let i = 0; i < questions.length; i++){
			if (i == 0){
				console.log('Question: ', questions[i])
			} else {
				console.log('Ansver', i, ': ', questions[i])
			};
			for (let j = 0; j < rightAnsvers.length; j++ ){
				if (i == rightAnsvers[j]+1){
					r.push(questions[i]);
				};
			};
		};
		for (let value of r){
			console.log('RightAnsver(s): ', value);
		};
		console.log('____________')

	});
	localStorage.clear();
});

$(function() {

	function Test(question, ans1, ans2, ans3){
		this.question = question;
		this.ans1 = ans1;
		this.ans2 = ans2;
		this.ans3 = ans3;
	}

	function Checkbox(firstAns, seconsAns, thirdAns) {
		this.firstAns = firstAns;
		this.seconsAns = seconsAns;
		this.thirdAns = thirdAns;
	}

	let t = new Test('#question', '#ans1', '#ans2', '#ans3');
	let c = new Checkbox();

	$('.resultation').on('click', function(e){
		let questions = [];
		let rightAnsvers = [];
		e.preventDefault();

		for (let key in t) {
			let value = $(t[key]).val()
			if(value == '') {
					alert('Заповніть всі поля');
		 		break;
		 	};
		 	questions.push(value);
		};

		if (($('#first-ans').prop('checked') == false) && ($('#second-ans').prop('checked') == false) && ($('#third-ans').prop('checked') == false )) {
			alert('Заповніть правильний варіант відповіді');
		};
		for (let j = 0; j < Object.keys(c).length; j++) {
			let value = ($($('input[type="checkbox"]').get(j)));
			if ($(value).prop('checked') == true) {
				rightAnsvers.push(j);
			};
		};
		localStorage.setItem('questionsArr', JSON.stringify(questions));
		localStorage.setItem('rightAnsversArr', JSON.stringify(rightAnsvers));

		$('#question').val(null);
		$('#ans1').val(null);
		$('#ans2').val(null);
		$('#ans3').val(null);
		$('#first-ans').prop('checked', false);
		$('#second-ans').prop('checked', false);
		$('#third-ans').prop('checked', false);
	});
})
