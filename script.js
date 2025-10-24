// Quiz questions - 25 questions about KITE AI
const quizQuestions = [
    // ... (keep all your 25 questions exactly as before)
    // I'm shortening this for the example, but you should keep all 25 questions
    {
        id: 1,
        text: "What was the current Kite AI project (founded in 2024) formerly known as?",
        options: {
            A: "AgenticBlock",
            B: "Zettablock",
            C: "CodeBlocker",
            D: "AgentCore"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 2,
        text: "Who is the Co-founder and Chief Executive Officer (CEO) of the current Kite AI?",
        options: {
            A: "Adam Smith",
            B: "Justin Potts",
            C: "Scott Shi",
            D: "Chi Zhang"
        },
        correct: "D",
        difficulty: "Easy"
    }
    // Add all other 23 questions here...
];

// Game state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 15;

// DOM Elements
let screens = {};
let elements = {};

// Initialize the application
function initializeApp() {
    console.log("Initializing KITE AI Quiz...");
    
    // Initialize DOM elements
    screens = {
        landing: document.getElementById('landingScreen'),
        warning: document.getElementById('warningScreen'),
        quiz: document.getElementById('quizScreen'),
        end: document.getElementById('endScreen')
    };

    elements = {
        enterBtn: document.getElementById('enterBtn'),
        startBtn: document.getElementById('startBtn'),
        restartBtn: document.getElementById('restartBtn'),
        currentQuestion: document.getElementById('currentQuestion'),
        currentScore: document.getElementById('currentScore'),
        questionText: document.getElementById('questionText'),
        optionsContainer: document.getElementById('optionsContainer'),
        feedback: document.getElementById('feedback'),
        endTitle: document.getElementById('endTitle'),
        endMessage: document.getElementById('endMessage'),
        confetti: document.getElementById('confetti'),
        timerProgress: document.getElementById('timerProgress'),
        timeLeft: document.getElementById('timeLeft')
    };

    // Check if all elements are found
    let allElementsFound = true;
    Object.entries(elements).forEach(([key, element]) => {
        if (!element) {
            console.error(`Element not found: ${key}`);
            allElementsFound = false;
        }
    });

    if (!allElementsFound) {
        console.error("Some DOM elements are missing. Please check your HTML.");
        return;
    }

    // Add event listeners
    elements.enterBtn.addEventListener('click', showWarningScreen);
    elements.startBtn.addEventListener('click', startQuiz);
    elements.restartBtn.addEventListener('click', restartQuiz);

    console.log("KITE AI Quiz initialized successfully!");
    updateProgress();
}

// Screen Management
function showScreen(screen) {
    console.log(`Showing screen: ${screen}`);
    Object.values(screens).forEach(s => s.classList.remove('active'));
    if (screens[screen]) {
        screens[screen].classList.add('active');
    }
}

function showWarningScreen() {
    console.log("Enter button clicked");
    showScreen('warning');
}

function startQuiz() {
    console.log("Start button clicked");
    showScreen('quiz');
    loadQuestion();
}

function restartQuiz() {
    console.log("Restart button clicked");
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    clearTimeout(timer);
    updateProgress();
    showScreen('landing');
}

// Timer Functions
function startTimer() {
    timeLeft = 15;
    elements.timeLeft.textContent = `${timeLeft}s`;
    elements.timerProgress.style.width = '100%';
    elements.timerProgress.style.transition = 'width 1s linear';
    
    timer = setInterval(() => {
        timeLeft--;
        elements.timeLeft.textContent = `${timeLeft}s`;
        elements.timerProgress.style.width = `${(timeLeft / 15) * 100}%`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    options.forEach(btn => btn.disabled = true);
    
    // Find correct answer button
    const correctBtn = Array.from(options).find(btn => 
        btn.textContent.startsWith(question.correct + '.')
    );
    
    // Show correct answer
    if (correctBtn) {
        correctBtn.classList.add('correct');
    }
    elements.feedback.textContent = 'Time\'s up! ⏰';
    elements.feedback.className = 'feedback incorrect';
    
    // Store user answer as incorrect (timeout)
    userAnswers.push({
        question: question.text,
        userAnswer: 'TIMEOUT',
        correctAnswer: question.correct,
        isCorrect: false
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function stopTimer() {
    clearInterval(timer);
}

// Quiz Logic
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showEndScreen();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    updateProgress();

    // Set question text
    elements.questionText.textContent = question.text;

    // Clear previous options
    elements.optionsContainer.innerHTML = '';

    // Create option buttons
    Object.entries(question.options).forEach(([letter, text]) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `<strong>${letter}.</strong> ${text}`;
        button.addEventListener('click', () => {
            stopTimer();
            selectAnswer(letter);
        });
        elements.optionsContainer.appendChild(button);
    });

    // Clear feedback
    elements.feedback.textContent = '';
    elements.feedback.className = 'feedback';

    // Start timer for this question
    startTimer();
}

function selectAnswer(selectedAnswer) {
    const question = quizQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    options.forEach(btn => btn.disabled = true);
    
    // Find correct answer button
    const correctBtn = Array.from(options).find(btn => 
        btn.textContent.startsWith(question.correct + '.')
    );
    
    // Find selected answer button
    const selectedBtn = Array.from(options).find(btn => 
        btn.textContent.startsWith(selectedAnswer + '.')
    );
    
    if (selectedAnswer === question.correct) {
        // Correct answer
        score++;
        if (selectedBtn) selectedBtn.classList.add('correct');
        elements.feedback.textContent = 'Correct! 🎉';
        elements.feedback.className = 'feedback correct';
    } else {
        // Wrong answer
        if (selectedBtn) selectedBtn.classList.add('incorrect');
        if (correctBtn) correctBtn.classList.add('correct');
        elements.feedback.textContent = `Wrong! Correct answer was ${question.correct}`;
        elements.feedback.className = 'feedback incorrect';
    }
    
    // Store user answer
    userAnswers.push({
        question: question.text,
        userAnswer: selectedAnswer,
        correctAnswer: question.correct,
        isCorrect: selectedAnswer === question.correct
    });
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

function updateProgress() {
    if (elements.currentQuestion) {
        elements.currentQuestion.textContent = currentQuestionIndex + 1;
    }
    if (elements.currentScore) {
        elements.currentScore.textContent = score;
    }
}

function showEndScreen() {
    showScreen('end');
    
    if (score === quizQuestions.length) {
        // Perfect score
        elements.endTitle.textContent = "CONGRATULATIONS!";
        elements.endMessage.textContent = "YOU ARE A KITE AI EXPERT!";
        createConfetti();
    } else {
        // Not perfect score
        elements.endTitle.textContent = "Quiz Complete!";
        elements.endMessage.textContent = `You scored ${score} out of ${quizQuestions.length}. Try again to become a Kite AI expert!`;
    }
}

function createConfetti() {
    // Clear existing confetti
    elements.confetti.innerHTML = '';
    
    // Simple confetti effect using CSS animations
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = getRandomColor();
        confetti.style.borderRadius = '50%';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.opacity = '0.8';
        elements.confetti.appendChild(confetti);
    }
    
    // Add CSS animation for confetti if not already added
    if (!document.querySelector('#confettiStyles')) {
        const style = document.createElement('style');
        style.id = 'confettiStyles';
        style.textContent = `
            @keyframes confettiFall {
                0% {
                    transform: translateY(-100px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(600px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function getRandomColor() {
    const colors = ['#4fc3f7', '#29b6f6', '#03a9f4', '#0288d1', '#01579b'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Fallback initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
