var questions = [
    {
        question: "In the Drop Ship retailer flow, what does the retailer send the supplier?",
        answers: {
            a: "Inventory",
            b: "Orders",
            c: "Shipments",
            d: "Nothing"
        },
        correctAnswer: 'b'
    },
    {
        question: "At a bare minimum, how often should suppliers update their inventory for retailers?",
        answers: {
            a: "Once a Day",
            b: "Once a Week",
            c: "Twice a Week",
            d: "Once a Month"
        },
        correctAnswer: 'a'
    },
    {
        question: "When a supplier replenishes stock to a company/business, instead of an individual customer, what is that considered?",
        answers: {
            a: "Nothing, there is no special term for this",
            b: "Sending Stock",
            c: "Business to Business (B2B)",
            d: "Inventory Management"
        },
        correctAnswer: 'c'
    },
    {
        question: "Who provides the best third party technology for Drop Ship?",
        answers: {
            a: "No One",
            b: "Everyone",
            c: "Logicbroker",
            d: "I don't understand the question"
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

startQuiz(questions, quizContainer, resultsContainer, submitButton);

function startQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i < questions.length; i++){
            var response = 
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }}}

    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer)
    }