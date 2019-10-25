
let data = document.querySelectorAll('[data-category]')
let greeting = document.querySelector(".greeting");
let rules = document.querySelector(".rules");
let htmlCard = document.querySelector(".card-container");
let htmlQuestion = document.querySelector(".click .question");
let htmlAnswer = document.querySelector(".click .answer");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let addPoint = document.querySelector(".pass");
let subPoint = document.querySelector(".wrong");
let score = document.querySelector(".digits");
let points = 0;
let i = 0


//FUNCTIONS/////////////////////////////////////////////////////

//REMOVES THE INITIAL GREETING FROM THE CARD ON LOAD OF QUESTIONS
function removeGreeting() {
    greeting.style.display = "none";
    rules.style.display = "none";
}
//LOGIC FOR MOVING TO THE NEXT CARD
function nextItem() {

    console.log(i)
    i = i + 1;
    i = i % question.length
    return question[i][0];

}
//LOGIC FOR MOVING TO A PREVIOUS CARD
function prevItem() {
	console.log(i)
    if (i === 0) {
        i = question.length;
    }
    i = i - 1;
    return question[i][0];
}
//LOAD INITIAL QUESTIONS
function load() {
    htmlQuestion.textContent = question[0][0];
    htmlAnswer.textContent = question[0][1];
}
//MOVE TO NEXT CARD
function nextCard() {
    next.addEventListener('click', function(evt) {
        htmlQuestion.textContent = nextItem();
        htmlAnswer.textContent = question[i][1];
    })
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 39) {
            htmlQuestion.textContent = nextItem();
            htmlAnswer.textContent = question[i][1];
        }
    })
}
//MOVE TO PREVIOUS CARD
function previousCard() {
    previous.addEventListener('click', function(evt) {
        htmlQuestion.textContent = prevItem();
        htmlAnswer.textContent = question[i][1];

    })
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode == 37) {
            htmlQuestion.textContent = prevItem();
            htmlAnswer.textContent = question[i][1];
        }
    })
}
//TO ADD POINTS USING "I GOT IT RIGHT BUTTON"
function addPoints() {
    addPoint.addEventListener("click", function(evt) {
        evt.preventDefault();
        points = points + 1;
        score.textContent = points;
        let rightAnswers = question.splice([i], 1);
        htmlQuestion.textContent = nextItem();
        if (points > 0) {
            score.classList.add("green");
            score.classList.remove("red");
        }

    })
}
//TO SUBTRACT POINTS USING "I GOT IT WRONG BUTTON"
function subtractPoints() {
    subPoint.addEventListener("click", function(evt) {
        evt.preventDefault();
        points = points - 1;
        score.textContent = points;
        htmlQuestion.textContent = nextItem();
        if (points < 0) {
            score.classList.add("red");
            score.classList.remove("green");
        }
    })
}
//INITIAL GREETING/////////////////////////////////////////////////////////////
greeting.textContent = "Welcome to Javascript Flashcards! Hover over this card to learn how to play!";
rules.innerHTML = "Start by picking a category above.</br></br>Once you are finished with a card click 'Next Card'</br></br>Give yourself points or remove them based on how well you do!</br></br>Good Luck!";


//MAIN DECKS - CRAZY ASS LOGIC TO MAKE THE PAGE MORE "DYNAMIC"....IT WORKED//////////////////////
for (let i = 0; i < data.length; i++) {
	console.log(data[i])
    data[i].addEventListener("click", function(evt) {

        console.log(evt.target)
        evt.preventDefault()
            // console.dir(evt.target)
        if (evt.target.dataset.category == evt.target.dataset.category) {
            question = Object.entries(questions[i])
            removeGreeting()
            load()

        }

    })

}
//MOVE THROUGH CARDS
nextCard()
previousCard()
// TO ADD AND SUBTRACT POINTS
addPoints();
subtractPoints();