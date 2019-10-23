let htmlCard = document.querySelector(".card-container")
let htmlQuestion = document.querySelector(".click .question")
let htmlAnswer = document.querySelector(".click .answer")
let next = document.querySelector(".next")
let previous = document.querySelector(".previous")
let addPoint = document.querySelector(".pass")
let subPoint = document.querySelector(".wrong")
let score = document.querySelector(".digits")


//questions and answers
let questions = {
        "Attribute": "A key-value pair in an HTML element. You can use HTML attributes to control certain aspects of an element, like where the element links to or the size of the element.",
        "Array": "A list of JavaScript values. In an array, each value has an index, which is the numbered position of that value in the array. The first value is at index 0, the next value is at index 1, and so on.",
        "Boolean": "A value that can be either true or false.",
        "Camel Case": "A common way to name variables in which you capitalize the first letter of each word (except for the first word) and then join all the words to make one long word.",
        "'DOM' Stands For": "Document Object Model",
        "What is the DOM": "The way that web browsers organize and keep track of HTML elements on a web page. These elements are organized in a treelike structure called the DOM tree. JavaScript and jQuery provide methods that work with the DOM to create and modify elements.",
        "Index": "A number that indicates the position of a value inside an array. The index can be used to access a specific value in an array.",
        "Key-Value Pair": "A pair made up of a string (called a key) that is matched with a particular value (which can be any type of value). They go inside JavaScript objects, and they are used to define an object's properties and methods.",
        "Library": "A collection of JavaScript code that we can load into our web pages to provides additional functions and method. In this book we use the jQuery library, which gives us functions and methods for working with the DOM more easily.",
        "Object": "A set of key-value pairs. Each key is a string that can be paired with any JavaScript value. You can then use the key to retrieve whatever value it's paired with in the object.",
        "String": "A list of characters surrounded by quotes, used to represent text in computer programs.",
        "Syntax": "How keywords, punctuation, and other characters are combined to make working JavaScript programs.",
        "Variable": "A way to give a JavaScript value a name. After you assign a value to a variable, you can use the variable name later to retrieve the value."

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
htmlAnswer.textContent = question[i][1]
    //next and previous button event listeners
next.addEventListener('click', function(evt) {
    htmlQuestion.textContent = nextItem()
    htmlAnswer.textContent = question[i][1]
})
previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem()
        htmlAnswer.textContent = question[i][1]

    })
    //event listener for making the card flip and show an answer
// htmlCard.addEventListener("click", function(evt) {
//         evt.preventDefault()
//         htmlQuestion.classList.toggle("hidden")
//         htmlAnswer.classList.toggle("show")
//         htmlAnswer.textContent = question[i][1]
//     })
    //the point system
let points = 0


addPoint.addEventListener("click", function(evt) {
    evt.preventDefault();
    points = points + 1;
    score.textContent = points;
    if (points > 0) {
        score.classList.add("green")
        score.classList.remove("red")
    }

})
subPoint.addEventListener("click", function(evt) {
    evt.preventDefault();
    points = points - 1;
    score.textContent = points;
    if (points < 0) {
    	score.classList.add("red")
    	score.classList.remove("green")
    }
})