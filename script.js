// Shuffle function to randomize the order of questions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const customQuestions = [
    {
        question: "7 + 8?",
        options: ["2", "12", "16", "15"],
        correctAnswer: "15"
    },
    {
        question: "20 - 10?",
        options: ["9", "10", "6", "8"],
        correctAnswer: "10"
    },
    {
        question: "What is 5 + 3?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8"
    },
    {
        question: "If you have 4 apples and eat 2, how many apples do you have left?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },
    {
        question: "What is the result of 6 multiplied by 2?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12"
    },
    {
        question: "What is the sum of 2 and 4?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "6"
    },
    {
        question: "How many sides does a triangle have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3"
    },
    {
        question: "What is the result of 9 divided by 3?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3"
    },
    // Additional Science Questions
    {
        question: "How many seasons are there?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "N2"],
        correctAnswer: "H2O"
    },
    {
        question: "An animal with ears like fans:",
        options: ["Lion", "Tiger", "Elephant", "Monkey"],
        correctAnswer:"Elephant"
    },
    {
        question: "An animal with ears on the top of its head.",
        options: ["Lion", "Rabbit", "Elephant", "Monkey"],
        correctAnswer: "Rabbit"
    },
    {
        question: "what is your pet name?",
        options: ["jenny","bruno","peppa","mia"],
    correctAnswer:"jenny"
    },
    {
        question: "What is the capital of India?",
        options: ["Chennai","Rajasthan","New Delhi","Mumbai"],
        correctAnswer: "New Delhi" 
    },
    {
        question:"Which animals do we use for riding?",
        options: ["Dog", "Car", "Cat", "Horse"],
        correctAnswer: "Horse"
    },
    {
        question:"How many legs does the elephant have?",
        options: ["2", "4", "6", "8"],
         correctAnswer: "4"    
    },
    {
        question:"In which month mangoes grow?",
        options:["January" , "February" , "March" , "April"],
        correctAnswer:"March"
    },
    {
        question:"Why do people hunt?",
        options:["to kill animals" , "to find food" ,"to find water", "To eat, for their skin and bones, and for fun also"]
    }
];

const totalQuestions = customQuestions.length;
let currentQuestion = 0;
let score = 0;

// Shuffle the questions before displaying
shuffleArray(customQuestions);

// Rest of the code remains the same
// ...

const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const resultElement = document.querySelector('.result');
const scoreElement = document.querySelector('.score');

function displayQuestion() {
    const currentQuestionData = customQuestions[currentQuestion];
    questionElement.textContent = `${currentQuestion + 1}) ${currentQuestionData.question}`;

    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}">${option}`;
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer() {
    const userAnswer = document.querySelector('input[name="option"]:checked');

    if (userAnswer) {
        const selectedAnswer = userAnswer.value;
        const currentQuestionData = customQuestions[currentQuestion];

        if (selectedAnswer === currentQuestionData.correctAnswer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < totalQuestions) {
            displayQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    questionElement.style.display = 'none';
    optionsContainer.style.display = 'none';
    resultElement.style.display = 'block';

    resultElement.textContent = `You scored ${score} out of ${totalQuestions} 😊`;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questionElement.style.display = 'block';
    optionsContainer.style.display = 'block';
    resultElement.style.display = 'none';
    displayQuestion();
}

document.querySelector('.submit-btn').addEventListener('click', checkAnswer);
document.querySelector('.retry-btn').addEventListener('click', resetQuiz);

// Initial question display
displayQuestion();
