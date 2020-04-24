var start = document.querySelector('.btn-Start');
var clear = document.querySelector('.btn-Clear');
var scoreboard = document.querySelector('.scoreboard');


var hour = 0,
		minutes = 0,
		seconds = 0,
		milliseconds = 0,
		play = false,
		period = 5;

var calc = setInterval(function () {
	console.log(hour , minutes , seconds , milliseconds);
		if(!play) return;
		milliseconds += period;
		if (hour > 24) {
			hour = 0;
		} else if (minutes > 59) {
			minutes = 0;
			hour += 1;
		} else if (seconds > 59) {
			seconds = 0;
			minutes += 1;
		} else if (milliseconds > 999) {
			milliseconds = 0;
			seconds += 1;
		}
		update();
},period);

function update() {
    var outMs = milliseconds > 99 ? (milliseconds > 9 ? milliseconds : '00' + milliseconds) : '0' + milliseconds;
        outMs = milliseconds === 0 ? "000" : outMs;
    var outSec = seconds > 9 ? seconds : '0' + seconds;
    var outMin = minutes > 9 ? minutes : '0' + minutes;
    var outHour = hour > 9 ? hour : '0' + hour;
		scoreboard.value = outHour + ":" + outMin + ":" + outSec + "." + outMs;
}

start.addEventListener('click', function() {
	play = !play;
	if (play) {
		start.innerHTML = 'Pause';
	} else {
		start.innerHTML = 'Cont..';
	}
});

clear.addEventListener('click', function() {
	start.innerHTML = 'Start';
	scoreboard.value = '00:00:00:000';
	hour = 0;
	minutes = 0;
	seconds = 0;
	milliseconds = 0;
	play = false;
});
