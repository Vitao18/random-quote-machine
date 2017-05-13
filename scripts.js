


var quoteList = ["I am coming more and more to the conviction that the necessity of our geometry cannot be demonstrated, at least neither by, nor for, the human intellect.",
"God does arithmetic", 	"Madam, I have come from a country where people are hanged if they talk.", "We build too many walls and not enough bridges.",
"Genius is patience."]

var author = ["Carl Friedrich Gauss", "Carl Friedrich Gauss", "Leonhard Euler", "Isaac Newton", "Isaac Newton"]

function generate(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}


function randomQuote(){
	var quote = document.getElementById('quote');
	quote.innerHTML = quoteList[generate(0,4)];
}