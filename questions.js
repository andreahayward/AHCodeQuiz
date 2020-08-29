const questions = [
    {
        question: 'In the Drop Ship retailer flow, what does the retailer send the supplier?',
        answers: [
            {text: 'Inventory', correct: false },
            {text: 'Orders', correct: true },
            {text: 'Shipments', correct: false },
            {text: 'Nothing', correct: false },
        ]
    },
    {
        question: 'At a bare minimum, how often should suppliers update their inventory for retailers?',
        answers: [
            {text: 'Once a Day', correct: true },
            {text: 'Once a Week', correct: false },
            {text: 'Twice a Week', correct: false },
            {text: 'Once a Month', correct: false },
        ]
    },
    {
        question: 'When a supplier replenishes stock to a company/business, instead of an individual customer, what is that considered?',
        answers: [
            {text: 'Nothing, there is no special term for this', correct: false},
            {text: 'Sending Stock', correct: false},
            {text: 'Business to Business (B2B)', correct: true},
            {text: 'Inventory Management', correct: false},
        ]
    },
    {
        question: 'Who provides the best third party technology for Drop Ship?',
        answers: [
            {text: 'No One', correct: false},
            {text: 'Everyone', correct: false},
            {text: 'Logicbroker', correct: true},
            {text: 'I do not understand the question', correct: false},
        ]
    }
];

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerDiv = document.getElementById('timer')
const score = 0;
const questionIndex = 0;
const questionsDiv = document.querySelector("#questionsDiv");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    setTime()
}
timer

// starts timer
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerDiv.textContent = secondsLeft + " seconds left to answer!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //sendMessage();
    }

  }, 1000);
}


function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function compare(event) {
    
}