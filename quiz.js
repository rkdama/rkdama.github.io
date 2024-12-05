// Update questions array with new content
const questions = [
    {
        question: "When you jump on Earth, you come back down because of gravity! 🌍",
        answer: true,
        explanation: "Gravity is like Earth's special power that pulls everything towards its center!",
        emoji: "🦘"
    },
    {
        question: "Light travels slower than sound! ⚡",
        answer: false,
        explanation: "Light is super fast! That's why you see lightning before you hear thunder.",
        emoji: "⚡"
    },
    {
        question: "Magnets can attract all types of metals! 🧲",
        answer: false,
        explanation: "Only some metals like iron are magnetic. Gold and silver aren't!",
        emoji: "🧲"
    },
    {
        question: "The Earth takes 24 hours to spin around once! 🌎",
        answer: true,
        explanation: "That's why we have day and night - the Earth is spinning like a top!",
        emoji: "🌍"
    },
    {
        question: "Air has no weight! 💨",
        answer: false,
        explanation: "Air does have weight! That's why we can feel wind pushing against us.",
        emoji: "💨"
    },
    {
        question: "Heat always moves from hot things to cold things! 🔥",
        answer: true,
        explanation: "That's why your hot chocolate cools down - the heat moves to the cooler air!",
        emoji: "🔥"
    },
    {
        question: "White light is made up of many different colors! 🌈",
        answer: true,
        explanation: "When light goes through a prism, it splits into all the colors of the rainbow!",
        emoji: "🌈"
    },
    {
        question: "Sound can travel through space! 🚀",
        answer: false,
        explanation: "Sound needs something to travel through, and space is empty!",
        emoji: "👨‍🚀"
    },
    {
        question: "Objects float in water because they're lighter than air! 🛥️",
        answer: false,
        explanation: "Objects float when they're lighter than the water they push aside!",
        emoji: "🛥️"
    },
    {
        question: "Friction can make things warmer! 🔮",
        answer: true,
        explanation: "Try rubbing your hands together - they get warm because of friction!",
        emoji: "🙌"
    }
];

// Add array to store user answers
let userAnswers = [];

// Update checkAnswer function to store answers
function checkAnswer(userAnswer) {
    const questionData = questions[currentQuestion];
    userAnswers.push({
        question: questionData.question,
        userAnswer: userAnswer,
        correctAnswer: questionData.answer,
        explanation: questionData.explanation,
        emoji: questionData.emoji
    });
    
    if (userAnswer === questionData.answer) {
        score++;
    }
    
    document.getElementById('current-score').textContent = score;
    nextQuestion();
}

// Update showResults function to include review
function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    const percentage = (score / questions.length) * 100;
    const resultEmoji = document.getElementById('result-emoji');
    const encouragement = document.getElementById('encouragement');
    
    // Set result emoji and message based on score
    if (percentage >= 80) {
        resultEmoji.textContent = "🏆";
        encouragement.textContent = "Wow! You're a Physics Genius!";
    } else if (percentage >= 60) {
        resultEmoji.textContent = "🌟";
        encouragement.textContent = "Great job! You're learning so much!";
    } else {
        resultEmoji.textContent = "💪";
        encouragement.textContent = "Keep practicing! You're getting better!";
    }
    
    document.getElementById('final-score').textContent = 
        `You got ${score} out of ${questions.length} correct!`;
    
    // Generate review section
    const reviewContainer = document.getElementById('answers-review');
    reviewContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const isCorrect = answer.userAnswer === answer.correctAnswer;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        reviewItem.innerHTML = `
            <p><strong>${index + 1}. ${answer.emoji} ${answer.question}</strong></p>
            <p class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">
                Your answer: ${answer.userAnswer ? 'True' : 'False'}
                ${isCorrect ? '✅' : '❌'}
            </p>
            <p><small>${answer.explanation}</small></p>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Update restartQuiz function to clear user answers
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('current-score').textContent = score;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('results-container').classList.add('hidden');
    displayQuestion();
}