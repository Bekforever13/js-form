let firstName = document.getElementById('firstName').value
let lastName = document.getElementById('lastName').value
let date = document.getElementById('date').value
let born = document.getElementById('born').value
let favMovie = document.getElementById('favMovie').value
let actor = document.getElementById('actor').value
let singer = document.getElementById('singer').value
let city = document.getElementById('city').value
let hobby1 = document.getElementById('hobby1').value
let hobby2 = document.getElementById('hobby2').value
let hobby3 = document.getElementById('hobby3').value

document.getElementById('myButton').onclick = function () {
	document.write(
		'Your first name is ' +
			firstName +
			'.Your last name is ' +
			lastName +
			'. You was born on ' +
			date +
			' in ' +
			born +
			'. Your favourite movie is ' +
			favMovie +
			' and your favourite actor/actress is ' +
			actor +
			'. Your favourite singer is ' +
			singer +
			'. One of your biggest dream is to visit ' +
			city +
			'. And your hobbies : ' +
			hobby1 +
			', ' +
			hobby2 +
			' and ' +
			hobby3 +
			'.'
	)
}
