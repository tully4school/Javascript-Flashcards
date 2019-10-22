let htmlCard = document.querySelector(".card-container")
let htmlQuestion = document.querySelector(".click .question")
let htmlAnswer = document.querySelector(".click .answer")
let next = document.querySelector(".next")


//questions and answers
let questions = {
	"Attribute": "A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.",
	"Array": "A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.",
}

//dont know how im going to use this yet
const question = Object.entries(questions)
for (let i = 0; i < question.length; i++){
	console.log(question[i][0])

}

//initial question
htmlQuestion.textContent = question[0][0]


//logic for making the card change values
htmlCard.addEventListener("click", function(evt){
	evt.preventDefault()
	htmlQuestion.classList.toggle("hidden")
	htmlAnswer.classList.toggle("show")
	htmlAnswer.textContent = question[0][1]

})

next.addEventListener("click", function(evt){
	evt.preventDefault()
	console.log(evt)
	htmlQuestion.textContent = question[1][0]
})