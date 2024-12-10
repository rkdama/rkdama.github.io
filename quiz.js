const questions = [
    {
        question: "When you push a toy car, it moves because of Newton's laws!",
        answer: true,
        emoji: "🚗"
    },
    {
        question: "Sound can travel through space without any medium!",
        answer: false,
        emoji: "🌠"
    },
    {
        question: "A rainbow appears because light splits into different colors!",
        answer: true,
        emoji: "🌈"
    },
    {
        question: "The Earth is a perfect sphere!",
        answer: false,
        emoji: "🌍"
    },
    {
        question: "Friction can make things warmer!",
        answer: true,
        emoji: "🔥"
    },
    {
        question: "The Moon produces its own light!",
        answer: false,
        emoji: "🌕"
    },
    {
        question: "Hot air rises and cold air sinks!",
        answer: true,
        emoji: "🎈"
    },
    {
        question: "All metals are magnetic!",
        answer: false,
        emoji: "🧲"
    },
    {
        question: "Light travels faster than sound!",
        answer: true,
        emoji: "⚡"
    },
    {
        question: "Plants get their energy only from the soil!",
        answer: false,
        emoji: "🌱"
    }
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Set();

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('total-questions').textContent = questions.length;
    displayQuestion();
}

function displayQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById('question-emoji').textContent = questionData.emoji;
    document.getElementById('question-text').textContent = questionData.question;
    document.getElementById('question-number').textContent = currentQuestion + 1;
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === questions.length - 1 || 
                      !answeredQuestions.has(currentQuestion);
}

function checkAnswer(userAnswer) {
    if (answeredQuestions.has(currentQuestion)) {
        return; // Question already answered
    }

    const correctAnswer = questions[currentQuestion].answer;
    
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('current-score').textContent = score;
        answeredQuestions.add(currentQuestion);
        
        if (currentQuestion === questions.length - 1) {
            gameOver(true);
        } else {
            updateNavigationButtons();
        }
    } else {
        gameOver(false);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1 && 
        answeredQuestions.has(currentQuestion)) {
        currentQuestion++;
        displayQuestion();
    }
}

function gameOver(completed) {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('game-over').classList.remove('hidden');
    
    const resultEmoji = document.getElementById('result-emoji');
    const finalScore = document.getElementById('final-score');
    const encouragement = document.getElementById('encouragement');
    
    if (completed) {
        resultEmoji.textContent = "🏆";
        finalScore.textContent = `Amazing! You got all ${score} questions right!`;
        encouragement.textContent = "You're a physics genius!";
    } else {
        resultEmoji.textContent = "💫";
        finalScore.textContent = `You got ${score} questions right!`;
        encouragement.textContent = "Keep practicing! You'll do better next time!";
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions.clear();
    document.getElementById('current-score').textContent = score;
    document.getElementById('game-over').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
} 