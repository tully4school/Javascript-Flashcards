let htmlCard = document.querySelector(".card-container")
let htmlQuestion = document.querySelector(".click .question")
let htmlAnswer = document.querySelector(".click .answer")
let next = document.querySelector(".next")
let previous = document.querySelector(".previous")


//questions and answers
let questions = {
	"Attribute": "A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.",
	"Array": "A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.",
	"Boolean": "A value that can be either true or false."
}
//turning the questions into indexable arrays
const question = Object.entries(questions)

//logic for creaging a functional next and previous card button
let i = 0
function nextItem() {
    i = i + 1; 
    i = i % question.length; 
    return question[i][0]; 
}
function prevItem() {
    if (i === 0) { 
        i = question.length; 
    }
    i = i - 1; 
    return question[i][0]; 
}
//initial loadup of questions
htmlQuestion.textContent = question[i][0]
//next and previous button event listeners
next.addEventListener('click', function(evt){
	htmlQuestion.textContent = nextItem()
})
previous.addEventListener('click', function(evt){
	htmlQuestion.textContent = prevItem()
})
//event listener for making the card flip and show an answer
htmlCard.addEventListener("click", function(evt){
	evt.preventDefault()
	htmlQuestion.classList.toggle("hidden")
	htmlAnswer.classList.toggle("show")
	htmlAnswer.textContent = question[i][1]
})

