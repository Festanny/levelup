// Слайдер
var gallery = document.querySelectorAll("#gallery .photos .rev-block");

var btn_prev = document.querySelector("#gallery .buttons .prev");
var btn_next = document.querySelector("#gallery .buttons .next");

var i = 0;

function prev() {
	gallery[i].classList.remove("showed");
	i--;
	if (i < 0) {
		i = gallery.length - 1;
	}
	gallery[i].classList.add("showed");
}

function next() {
	gallery[i].classList.remove("showed");
	i++;
	if (i > gallery.length - 1) {
		i = 0;
	}
	gallery[i].classList.add("showed");
}
setInterval('next()', 4000);

// Таймер
var timerT = document.querySelector(".timer");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

var m=30;
var s=60;

minutes.innerHTML = m;
timer = setInterval(function () {
	if (s>0) {
		s--;
		seconds.innerHTML = s;
	}
	if (s==0) {
		s=60;
		seconds.innerHTML = "0" + 0;
   	}
	if (s==59) {
		m--;
		minutes.innerHTML = m;
	}
	if (s >= 0 && s <= 9) {
		seconds.innerHTML = "0" + s;
	}
	if (m >= 0 && m <= 9) {
		minutes.innerHTML = "0" + m;
	}
	if (m==0 && s==60) {
		clearInterval(timer);
		timerT.innerHTML = "Время вышло!";
	}
}, 1000);


// Проверка телефона
var form = document.querySelector(".form form");
var vivod = document.querySelector("#error");
var vivod2 = document.querySelector("#message");
var error = "";
var message = "";

function send() {
	error = "";
	message = "";
	
	if (form[0].value != "") {
		if (/^[а-яА-Я- ]+$/.test(form[0].value) === false) {
			error += "Не правильный формат поля Имя <br>";
		}
	}
	else {
		error += "Заполните поле ФИО <br>";	
	}
	
	if (form[1].value != "") {
		if (/^\d{10,10}\d$/.test(form[1].value) === false) {
			error += "Не правильный формат поля Телефон <br>";
		}
	}
	else {
		error += "Заполните поле Телефон <br>";	
	}
	vivod.innerHTML = error;
}