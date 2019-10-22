let htmlCard = document.querySelector(".card-container")
let htmlQuestion = document.querySelector(".click .question")
let htmlAnswer = document.querySelector(".click .answer")

class Card {
	constructor(q,a){
		this.question = q;
		this.answer = a;
	}
}

let attribute = new Card("Attribute","A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.")
let array = new Card("Array", "A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.")


htmlQuestion.textContent = attribute.question
htmlCard.addEventListener("click", function(evt){
	evt.preventDefault()
	htmlQuestion.classList.toggle("hidden")
	htmlAnswer.classList.toggle("show")
	htmlAnswer.textContent = attribute.answer


// if (question.textContent = attribute.question){
// 	(question.textContent = attribute.answer)

// }
})
