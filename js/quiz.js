const questions = [
    {
        question: "When you push a toy car, it moves because of Newton's laws! 🚗",
        answer: true,
        explanation: "That's right! When you push the car (force), it moves (motion). This is Newton's First Law in action!",
        emoji: "🚗"
    },
    {
        question: "The Sun orbits around the Earth! 🌍",
        answer: false,
        explanation: "Actually, the Earth orbits around the Sun! The Sun stays in the center of our solar system.",
        emoji: "🌞"
    },
    {
        question: "Magnets can stick to all metals! 🧲",
        answer: false,
        explanation: "Not all metals are magnetic! Only iron, nickel, and cobalt are magnetic metals.",
        emoji: "🧲"
    },
    {
        question: "Sound can travel through space! 🚀",
        answer: false,
        explanation: "Sound needs air or another material to travel through. In space, there's no air, so sound can't travel!",
        emoji: "🌠"
    },
    {
        question: "Rainbows appear because light splits into different colors! 🌈",
        answer: true,
        explanation: "Yes! White light from the Sun splits into different colors when it passes through water droplets.",
        emoji: "🌈"
    },
    {
        question: "Hot air rises and cold air sinks! 🎈",
        answer: true,
        explanation: "Correct! Hot air is lighter (less dense) than cold air, so it floats up while cold air sinks down.",
        emoji: "🎈"
    },
    {
        question: "Lightning comes before thunder! ⚡",
        answer: false,
        explanation: "Lightning and thunder happen at the same time, but we see lightning first because light travels faster than sound!",
        emoji: "⛈️"
    },
    {
        question: "Friction can make things hot! 🔥",
        answer: true,
        explanation: "Right! When you rub your hands together, they get warm because of friction.",
        emoji: "🔥"
    },
    {
        question: "The Moon makes its own light! 🌕",
        answer: false,
        explanation: "The Moon reflects light from the Sun - it doesn't make its own light!",
        emoji: "🌕"
    },
    {
        question: "A feather will fall as fast as a rock in space! 🪶",
        answer: true,
        explanation: "In space (with no air), all objects fall at the same speed, no matter their weight!",
        emoji: "🪶"
    },
    {
        question: "Ice is heavier than liquid water! ❄️",
        answer: false,
        explanation: "Ice actually floats because it's lighter (less dense) than liquid water!",
        emoji: "❄️"
    },
    {
        question: "Energy can be changed from one form to another! ⚡",
        answer: true,
        explanation: "Yes! Like when a flashlight changes electrical energy into light energy!",
        emoji: "🔦"
    },
    {
        question: "The Earth is a perfect sphere! 🌍",
        answer: false,
        explanation: "The Earth is actually slightly squished at the poles and bulges at the equator!",
        emoji: "🌍"
    },
    {
        question: "Plants get their food from the soil! 🌱",
        answer: false,
        explanation: "Plants make their own food using sunlight, water, and air in a process called photosynthesis!",
        emoji: "🌱"
    },
    {
        question: "You can see sound waves in a guitar string when it vibrates! 🎸",
        answer: true,
        explanation: "Yes! When you pluck a guitar string, you can see it vibrate to make sound waves!",
        emoji: "🎸"
    }
];

let currentQuestion = 0;
let score = 0;
let lives = 3;

function startQuiz() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    displayQuestion();
}

function displayQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('question-text').textContent = questionData.question;
    document.getElementById('question-emoji').textContent = questionData.emoji;
    document.getElementById('feedback').classList.add('hidden');
    updateProgressBar();
}

function checkAnswer(userAnswer) {
    const questionData = questions[currentQuestion];
    const feedback = document.getElementById('feedback');
    const feedbackEmoji = document.getElementById('feedback-emoji');
    const feedbackText = document.getElementById('feedback-text');
    const explanation = document.getElementById('explanation');
    
    feedback.classList.remove('hidden');
    
    if (userAnswer === questionData.answer) {
        score++;
        feedbackEmoji.textContent = "🎉";
        feedbackText.textContent = "Awesome job!";
        feedback.className = 'correct';
    } else {
        lives--;
        feedbackEmoji.textContent = "💫";
        feedbackText.textContent = "Not quite right, but keep trying!";
        feedback.className = 'incorrect';
    }

    explanation.textContent = questionData.explanation;
    document.getElementById('current-score').textContent = score;
    document.getElementById('lives').textContent = lives;

    setTimeout(() => {
        nextQuestion();
    }, 3000);
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length && lives > 0) {
        displayQuestion();
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    const percentage = (score / questions.length) * 100;
    const resultEmoji = document.getElementById('result-emoji');
    const encouragement = document.getElementById('encouragement');
    
    if (percentage >= 80) {
        resultEmoji.textContent = "🏆";
        encouragement.textContent = "Amazing! You're a physics superstar!";
    } else if (percentage >= 60) {
        resultEmoji.textContent = "🌟";
        encouragement.textContent = "Great job! Keep learning and growing!";
    } else {
        resultEmoji.textContent = "💪";
        encouragement.textContent = "Good try! Practice makes perfect!";
    }
    
    document.getElementById('final-score').textContent = 
        `You got ${score} out of ${questions.length} correct!`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    lives = 3;
    document.getElementById('current-score').textContent = score;
    document.getElementById('lives').textContent = lives;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('results-container').classList.add('hidden');
    displayQuestion();
} 