


var quoteList = ["I am coming more and more to the conviction that the necessity of our geometry cannot be demonstrated, at least neither by, nor for, the human intellect.",
"God does arithmetic", 	"Madam, I have come from a country where people are hanged if they talk.", "We build too many walls and not enough bridges.",
"Genius is patience.", "Mathematicians are like managers - they want improvement without change.", "Need we add that mathematicians themselves are not infallible?",
"It would be better for the true physics if there were no mathematicians on earth."]

var authorList = ["Carl Friedrich Gauss", "Carl Friedrich Gauss", "Leonhard Euler", "Isaac Newton", "Isaac Newton", "Edsger Dijkstra", "Henri Poincare"
, "Daniel Bernoulli"]

function generate(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}


function randomQuote(){
	var number = generate(0,quoteList.length- 1)
	var quote = document.getElementById('quote');
	var citation = document.getElementById('citation');
	var quoteSelected= quoteList[number];
	var authorSelected = authorList[number];
	quote.innerHTML = quoteSelected;
	citation.innerHTML = authorSelected; 
	document.getElementById("tweet").href = "https://twitter.com/intent/tweet?text=" + "'"+quoteSelected + "'"+" - " + authorSelected;
}

window.onload = randomQuote();