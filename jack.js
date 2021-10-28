// var playerInfo = {
// 	name: "",
// 	chips: 0
// }
var cards = []
var hasBlackJack = false
var isAlive = false 
var firstCard = getRandomNum()
var secondCard = getRandomNum()

var sum = firstCard + secondCard
 console.log(cards)

cards = [firstCard, secondCard]  

var refreshBtn = document.querySelector("#btn2")
var q = 0 
var p = document.getElementById("player")
q = document.getElementById("chip")


var storedChips = localStorage.getItem('Chips')
if (storedChips){
	q.innerHTML = storedChips
}




var cd = document.querySelector("#card")
var sm = document.querySelector("#sum")
var view = document.querySelector("#display")

function getValue() {
	var end = document.getElementById("input").value
	localStorage.setItem('name', end) 
	return false
}

function getRandomNum() {
	var rand = Math.floor(Math.random() * 13) + 1
	if (rand > 10){
		return 10
	} else if(rand === 1){
		return 11
	} else{
		return rand 
	}
}

function begin() {
	render()
}

function render() {
	
	isAlive = true

	console.log(cards)
	cd.innerHTML = "Cards: "
	for (var i = 0; i < cards.length; i++){
		cd.innerHTML += cards[i] +" "
	}
	sm.innerHTML = "Sum: "+ sum
	if (sum < 21){
		view.innerHTML = "Cards less than 21, Do you wish to draw a new card ?"
		isAlive
	}else if (sum === 21){
			if (isAlive===true && hasBlackJack===false){
			 	q.innerHTML = 0 
				q.innerHTML = q.innerHTML + 200
				q.innerHTML = q.innerHTML / 2
				} 
		isAlive = false
		view.innerHTML = "Woohoo! you've won a Black Jack!"
		hasBlackJack = true
	}else {
		if (q.innerHTML>0){
			q.innerHTML -= 10
		} else{
			q.innerHTML *= 0
		}
	
		view.innerHTML = "You've lost the game, Refresh and try again."
		isAlive = false
	}
	console.log(hasBlackJack)
}

function newCard() {
	if (isAlive===true && hasBlackJack===false){
		var ncard = getRandomNum()
		cards.push(ncard)
		sum += ncard
	
		render()
		// logData()
	}
}

function saveToLocalStorage() {
	 localStorage.setItem('Chips', q.innerHTML)
}

// var person = {
// 	name: "Olumide",
// 	age: 20,
// 	country: "Nigeria"
// }

// function logData() {
// 	var view = person.name +" is "+ person.age +" years old, and lives in "+ person.country+"."
// 	playa.textContent = view
// }















