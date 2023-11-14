// calling from my game.html
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull")

//defaults
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// where later ill a fetch assync
let questions = [];

fetch("http://localhost:8080/api")
    .then(res => {
      return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions)
        questions = loadedQuestions.map(loadedQuestions => {
            const formattedQuestion = {
                question: loadedQuestions.question
            };

            const answerChoices = [...loadedQuestions.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0, loadedQuestions.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });

            return formattedQuestion
        })

        startGame();
    })
    .catch(err => {
        console.error(err)
    });



// contants 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

// functions
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        // go to the end page
        return window.location.assign("/game/end.html")
    }
    
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    // save highest score
    localStorage.setItem('mostRecentScore',score)
    // update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
       
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    })
});

incrementScore = nun => {
    score += nun;
    scoreText.innerText = score;
}


