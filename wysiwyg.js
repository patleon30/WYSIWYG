//declared variables to hold variables
console.log("greetings.")

let input = document.getElementById("input");//sends information in
let container = document.getElementById("container");
let cards = document.getElementsByClassName("cards");
let bio = "";
let array = [];

//defines the function setArray
function setArr() {
console.log("array", this.responseText);

//set array to equal to parse json file 
	array = JSON.parse (this.responseText)
console.log("array", array)
//called outputCards with array passed into it
	outputCards(array);
};

//define outputCards function while expecting peopleArray to happen(from line array)
function outputCards(peopleArray) {
	
	//for loop that iterates through the peopleArray 
	for (i = 0; i < peopleArray.length; i++) {
	
	//sets the container to display all the json info through concentration upon gtting the json file through the XHR
	container.innerHTML +=`<div class="cards"> <person>
  		<header>${peopleArray[i].name} & ${peopleArray[i].title}</header>
  		<section><span class="bio">${peopleArray[i].bio}</span> & <img src ="${peopleArray[i].image}"> </img></section>
  		<footer>${peopleArray[i].lifespan.birth} & ${peopleArray[i].lifespan.death}</footer>
	</person></div>`
	}
	activateClickEvent();
};

function XHRFail(){
	console.log(this.status, this.statusText)
};
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", setArr);
myRequest.addEventListener("error", XHRFail);

myRequest.open("GET", "item.json");
	

myRequest.send();
 
function activateClickEvent() {
	for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click",function(e) {
		clearInputEvent()
		activateFocusEvent()
		deathCard()
		activateBorderEvent(e.currentTarget)
		});
	}
}
function activateFocusEvent(){
	input.focus();
}

function activateBorderEvent(clickedCard){
	clickedCard.classList.add("selectedCard"); 
	activateKeyEvent(clickedCard)
}
function deathCard(){
//defines function in death cards	
	
	console.log("cards", cards);
	for (var i = 0; i < cards.length; i++) {
		if (cards[i].classList.contains("selectedCard")){
			cards[i].classList.remove("selectedCard")
		
		};
	}
}
function activateKeyEvent(clickedCard){
	input.addEventListener("keyup", function(){
		if(e.keyCode === 13){
			clearInputEvent()
		}else{
		mirrorText(clickedCard);
		}
		
		
	});
}

//defines function mirrorText and expects clickedCard to run (from, clickedCard)
function mirrorText(clickedCard){
if (clickedCard.classList.contains("selectedCard")){
	clickedCard.querySelector(".bio").innerHTML = input.value;
	}
	
	
}

function clearInputEvent() {
	input.value = "";
}
