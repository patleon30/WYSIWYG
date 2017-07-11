console.log("greetings.")
let input = document.getElementById("input");
let container = document.getElementById("container");
let card = document.getElementsByClassName("");
let bio = "";
let array = [];

function setArr() {
	array = JSON.parse (this.responseText)
	console.log (array);
	outputCards(array);
};

function outputCards(peopleArray) {
	for (i = 0; i < peopleArray.length; i++) {
	console.log(peopleArray[i].title)
	container.innerHTML +=`<person>
  <header>${peopleArray[i].name} & ${peopleArray[i].title}</header>
  <section>${peopleArray[i].bio} & <img src ="${peopleArray[i].image}"> </img>[i]=.image</section>
  <footer>${peopleArray[i].lifespan}</footer>
</person>`
	}
};


function XHRFail(){
	console.log(this.status, this.statusText)
}

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", setArr);
// myRequest.addEventListener("error", executeXHRFail);

myRequest.open("GET","item.json");
	console.log("data", myRequest);
myRequest.send();
