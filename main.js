let firstName
let lastName
let date
let born
let favMovie
let actor
let singer
let city
let hobby1
let hobby2
let hobby3

document.getElementById('myButton').onclick = function () {
	firstName = document.getElementById('firstName').value
	lastName = document.getElementById('lastName').value
	date = document.getElementById('date').value
	born = document.getElementById('born').value
	favMovie = document.getElementById('favMovie').value
	actor = document.getElementById('actor').value
	singer = document.getElementById('singer').value
	city = document.getElementById('city').value
	hobby1 = document.getElementById('hobby1').value
	hobby2 = document.getElementById('hobby2').value
	hobby3 = document.getElementById('hobby3').value
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
