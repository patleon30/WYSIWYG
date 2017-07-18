//declared variables to hold variables
console.log("greetings.")

let input = document.getElementById("input");//sends information in
let container = document.getElementById("container");
let cards = document.getElementsByClassName("cards");
let bio = "";
let array = [];

//defines the function setArray
function setArr() {


//set array to equal to parse json file 
	array = JSON.parse (this.responseText)

//called outputCards with array passed into it
	outputCards(array);
};

//define outputCards function while expecting peopleArray to be passed in(from line 18 "array")
function outputCards(peopleArray) {
	
//for loop that iterates through the peopleArray 
	for (i = 0; i < peopleArray.length; i++) {
	
//sets the container to display all the json info through concatenation upon getting the json file through the XHR
	container.innerHTML +=`<div class="cards"> <person>
  		<header>${peopleArray[i].name} & ${peopleArray[i].title}</header>
  		<section><span class="bio">${peopleArray[i].bio}</span> & <img src ="${peopleArray[i].image}"> </img></section>
  		<footer>${peopleArray[i].lifespan.birth} & ${peopleArray[i].lifespan.death}</footer>
	</person></div>`
	}
//To execute function activateClickEvent	
	activateClickEvent();
};

//Defines xhrFail
function XHRFail(){



console.log(this.status, this.statusText)
};
//creates an object to my request 
var myRequest = new XMLHttpRequest();
//adds an eventlistener to runs set array on load
myRequest.addEventListener("load", setArr);
//adds an eventlistener to run xhrfail on error
myRequest.addEventListener("error", XHRFail);
//initalize request get is the type of request and the file name goes to get the request
myRequest.open("GET", "item.json");
	
//sends the request
myRequest.send();

//defines the activateClickEvent
function activateClickEvent() {
//iterates the cards array 	
	for (var i = 0; i < cards.length; i++) {
//runs through each individual card to addEventlistner to click	
	cards[i].addEventListener("click",function(e) {
//calls function clearInputEvent		
		clearInputEvent()
//calls function activateFocusEvent
		activateFocusEvent()
//calls function deathCard		
		deathCard()
//calls function activateBorderEvent passes through e.currentTarget		
		activateBorderEvent(e.currentTarget)
		});
	}
}
//defines activateFocusEvent
function activateFocusEvent(){

//selects the input element and puts focus on it	
	input.focus();
}

//defines activateBorderEvent and expects clickedCard from line 70 passes through e.current target
function activateBorderEvent(clickedCard){
//adds a class selectedCard to the clickedCard	
	clickedCard.classList.add("selectedCard"); 
//calls function activateKeyEvent passes through clickedCard	
	activateKeyEvent(clickedCard)
}
//defines function in death cards	
function deathCard(){
//running through array of cards 
	for (var i = 0; i < cards.length; i++) {
//checks each individual card with for the class for selectedCard 
		if (cards[i].classList.contains("selectedCard")){
//if the condition is true its going to remove selectedCard			
			cards[i].classList.remove("selectedCard")
		
		};
	}
}
//defines activateKeyEvent expects clickedCard from (line86) 
function activateKeyEvent(clickedCard){
//selects inputs and addEventlistner to keyup	
	input.addEventListener("keyup", function(){
//checks the e.keyCode equals 13 is enter
		if(event.keyCode === 13) {
//if the condition is true it calls functions to clearInput			
			clearInputEvent()
//otherwise if false 		
		}else {
//if the condition is false it calls function to mirrorText passes clickedCard		
		mirrorText(clickedCard);
		}
		
		
	});
}

//defines function mirrorText and expects clickedCard from (line 111)
function mirrorText(clickedCard){

//checks clickedCard for class selectedCard	
if (clickedCard.classList.contains("selectedCard")){
//checks clickedCard for the bio class and replaces the innerHTML input.value	
	clickedCard.querySelector(".bio").innerHTML = input.value;
	}
	
	
}
//defines clearInputEvent
function clearInputEvent() {
//sets the input value to empty string
	input.value = "";
}
