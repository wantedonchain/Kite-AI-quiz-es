// Quiz questions - 25 questions about KITE AI
const quizQuestions = [
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
    },
    {
        id: 3,
        text: "Which major financial institution co-led Kite AI's $18 million Series A funding round in September 2025?",
        options: {
            A: "Goldman Sachs",
            B: "Citi Ventures",
            C: "PayPal Ventures",
            D: "SBI US Gateway Fund"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 4,
        text: "What is the total cumulative funding raised by Kite AI, as of the September 2025 Series A announcement?",
        options: {
            A: "$15 million",
            B: "$18 million",
            C: "$33 million",
            D: "$40 million"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 5,
        text: "Which two companies did Kite AI Co-founder and CTO Scott Shi previously build real-time AI infrastructure or serve as a founding engineer for?",
        options: {
            A: "Databricks and NEAR",
            B: "Uber and Salesforce Einstein AI",
            C: "OpenAI and Google",
            D: "Polygon and Chainlink"
        },
        correct: "B",
        difficulty: "Hard"
    },
    {
        id: 6,
        text: "Kite AI is categorized as an infrastructure platform primarily built for which market segment?",
        options: {
            A: "Web2 E-commerce Micro-payments",
            B: "AI Code Completion",
            C: "Infra Layer1 AI platform",
            D: "Traditional Web Services"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 7,
        text: "In what year was the current Kite AI project officially founded?",
        options: {
            A: "2014",
            B: "2022",
            C: "2024",
            D: "2025"
        },
        correct: "C",
        difficulty: "Easy"
    },
    {
        id: 8,
        text: "What is the name of Kite AI's flagship product that enables autonomous agents to authenticate and transact in real-world environments?",
        options: {
            A: "Agent App Store",
            B: "Agent Passport",
            C: "Kite AIR (Agent Identity Resolution)",
            D: "Kite CodeX"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 9,
        text: "The Seed funding round of $15 million for Kite AI was announced in which month of 2025?",
        options: {
            A: "January",
            B: "February",
            C: "September",
            D: "October"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 10,
        text: "Which core component of Kite AIR provides a verifiable identity for each agent along with operational guardrails?",
        options: {
            A: "Policy Enforcer",
            B: "Agent Passport",
            C: "Via Protocol Bridge",
            D: "Kite Smart Wallet"
        },
        correct: "B",
        difficulty: "Hard"
    },
    {
        id: 11,
        text: "Which partner provides an AI-enhanced oracle infrastructure for Real-World Asset (RWA) and DeFi data on the Kite AI network?",
        options: {
            A: "Codatta",
            B: "BitMind",
            C: "APRO",
            D: "Masa"
        },
        correct: "C",
        difficulty: "Hard"
    },
    {
        id: 12,
        text: "The partnership with which company involves Kite AI providing identity authentication and on-chain settlement for access to 500 million healthcare data points?",
        options: {
            A: "OpenAI",
            B: "Codatta",
            C: "CARV",
            D: "Nubila"
        },
        correct: "B",
        difficulty: "Hard"
    },
    {
        id: 13,
        text: "Which concept did CEO Chi Zhang state would become the 'dominant UI to digital economies of the future,' necessitating Kite AI's infrastructure?",
        options: {
            A: "Decentralized Applications (dApps)",
            B: "Large Language Models (LLMs)",
            C: "Autonomous agents",
            D: "Web3 Gaming"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 14,
        text: "Kite AI's core infrastructure is designed to facilitate transactions using which method to reduce reliance on legacy card rails?",
        options: {
            A: "Fiat currency transfers",
            B: "Native stablecoin payments",
            C: "Tokenized securities",
            D: "Credit lines"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 15,
        text: "On what date was the Kite Validator Program officially launched?",
        options: {
            A: "February 1, 2025",
            B: "September 2, 2025",
            C: "October 1, 2024",
            D: "October 1, 2025"
        },
        correct: "D",
        difficulty: "Hard"
    },
    {
        id: 16,
        text: "Which firm, besides PayPal Ventures, was a lead investor in both the Seed and Series A rounds for Kite AI?",
        options: {
            A: "Samsung Next",
            B: "General Catalyst",
            C: "HashKey Capital",
            D: "LayerZero"
        },
        correct: "B",
        difficulty: "Medium"
    },
    {
        id: 17,
        text: "What key feature is offered by the Kite Agent App Store component of Kite AIR?",
        options: {
            A: "Code completion for agents",
            B: "Secure API key generation",
            C: "Agent discovery and paid access to services (APIs, data, commerce tools)",
            D: "Deepfake detection services"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 18,
        text: "Where did Kite AI Co-founder and CEO Chi Zhang earn his PhD in AI?",
        options: {
            A: "MIT",
            B: "Harvard",
            C: "University of Tokyo",
            D: "UC Berkeley"
        },
        correct: "D",
        difficulty: "Medium"
    },
    {
        id: 19,
        text: "What specific service does the partner BitMind offer to enhance trust and security on the Kite AI network?",
        options: {
            A: "Policy enforcement auditing",
            B: "Cryptographic identity verification",
            C: "Deepfake detection services",
            D: "RWA data streaming"
        },
        correct: "C",
        difficulty: "Hard"
    },
    {
        id: 20,
        text: "The historical Kite (2014) AI coding assistant was founded by which individual?",
        options: {
            A: "Chi Zhang",
            B: "Scott Shi",
            C: "Adam Smith",
            D: "Justin Potts"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 21,
        text: "Before shutting down in 2022, the historical Kite (2014) was acquired by which financial technology company for $24.8 million?",
        options: {
            A: "PayPal",
            B: "Affirm",
            C: "Databricks",
            D: "General Catalyst"
        },
        correct: "B",
        difficulty: "Hard"
    },
    {
        id: 22,
        text: "According to its founder, the historical Kite (2014) failed because the AI technology was not 'tech ready,' requiring what level of improvement to break into the market?",
        options: {
            A: "2x improvement",
            B: "5x improvement",
            C: "10x improvement",
            D: "100x improvement"
        },
        correct: "C",
        difficulty: "Hard"
    },
    {
        id: 23,
        text: "Which major commerce platform, besides PayPal, is Kite AIR currently integrated with for merchant discoverability by AI shopping agents?",
        options: {
            A: "Amazon",
            B: "eBay",
            C: "Shopify",
            D: "Etsy"
        },
        correct: "C",
        difficulty: "Medium"
    },
    {
        id: 24,
        text: "The core thesis of Kite AI is to provide a foundational layer that includes real-time payments, programmable governance, cryptographic identity, and what other key capability?",
        options: {
            A: "Open-source code library",
            B: "Verifiable attribution",
            C: "Universal data catalog",
            D: "Quantum computing access"
        },
        correct: "B",
        difficulty: "Hard"
    },
    {
        id: 25,
        text: "Kite AI was named a 'Top 100 Project' in 2025 at an annual summit hosted by which two entities?",
        options: {
            A: "Coinbase and Sequoia",
            B: "Silicon Valley 101 x RootData",
            C: "PayPal and General Catalyst",
            D: "Databricks and Uber"
        },
        correct: "B",
        difficulty: "Medium"
    }
];

// Game state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 15;

// DOM Elements
const screens = {
    landing: document.getElementById('landingScreen'),
    warning: document.getElementById('warningScreen'),
    quiz: document.getElementById('quizScreen'),
    end: document.getElementById('endScreen')
};

const elements = {
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

// Event Listeners
elements.enterBtn.addEventListener('click', showWarningScreen);
elements.startBtn.addEventListener('click', startQuiz);
elements.restartBtn.addEventListener('click', restartQuiz);

// Screen Management
function showScreen(screen) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screen].classList.add('active');
}

function showWarningScreen() {
    showScreen('warning');
}

function startQuiz() {
    showScreen('quiz');
    loadQuestion();
}

function restartQuiz() {
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
    correctBtn.classList.add('correct');
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
        selectedBtn.classList.add('correct');
        elements.feedback.textContent = 'Correct! 🎉';
        elements.feedback.className = 'feedback correct';
    } else {
        // Wrong answer
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
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
    elements.currentQuestion.textContent = currentQuestionIndex + 1;
    elements.currentScore.textContent = score;
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
    // Simple confetti effect using CSS animations
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width =
