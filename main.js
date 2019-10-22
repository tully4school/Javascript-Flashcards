let htmlCard = document.querySelector(".card-container")
let htmlQuestion = document.querySelector(".click .question")
let htmlAnswer = document.querySelector(".click .answer")
let next = document.querySelector(".next")
// let questions = []
class Card {
	constructor(q,a) {
		this.question = q;
		this.answer = a;
	}

}

let q1 = new Card("Array","A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.")
let q2 = new Card("Attribute","A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.")
// questions.push(q1,q2)


htmlQuestion.text
htmlCard.addEventListener("click", function(evt) {
        evt.preventDefault()
        htmlQuestion.classList.toggle("hidden")
        htmlAnswer.classList.toggle("show")
    })
// next.addEventListener("click", function(evt) {
//     evt.preventDefault()
//     console.log(evt)

// questions and answers
// let questions = {
//     "Attribute": "A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.",
//     "Array": "A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.",
//     "Boolean": "A value that can be either true or false."
// }

// //dont know how im going to use this yet
// // const question = Object.entries(questions)
// // for (let i = 0; i < question.length; i++) {
// //     console.log(question[i])

// // }

// // function shuffle(questions){
// // 	for(var j, x, i = questions.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
// //     return questions;
// // };
// // console.log(questions)
// htmlAnswer.textContent = question[0][0]
// //logic for making the card change values
// htmlCard.addEventListener("click", function(evt) {
//         evt.preventDefault()
//         htmlQuestion.classList.toggle("hidden")
//         htmlAnswer.classList.toggle("show")
//         htmlAnswer.textContent = question[0][1]
//     })
//     initial question



// function next() {
//         for (var i = 0; i < questions.length; i++) {

//         }
//     };
// next.addEventListener("click", function(evt) {
//     evt.preventDefault()
//     console.log(evt)



// // })

