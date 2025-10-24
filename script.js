// Quiz Configuration
const QUIZ_CONFIG = {
    timePerQuestion: 20,
    xpPerQuestion: 100,
    totalQuestions: 25,
    resetHours: 2,
    leaderboardSize: 50
};

// Game State
let gameState = {
    players: new Map(),
    currentQuestion: 0,
    currentPlayer: '',
    score: 0
};

// ALL 25 KITE AI QUESTIONS
const QUIZ_QUESTIONS = [
    {
        question: "What was the current Kite AI project (founded in 2024) formerly known as?",
        options: ["AgenticBlock", "Zettablock", "CodeBlocker", "AgentCore"],
        correct: 1
    },
    {
        question: "Who is the Co-founder and Chief Executive Officer (CEO) of the current Kite AI?",
        options: ["Adam Smith", "Justin Potts", "Scott Shi", "Chi Zhang"],
        correct: 3
    },
    {
        question: "Which major financial institution co-led Kite AI's $18 million Series A funding round in September 2025?",
        options: ["Goldman Sachs", "Citi Ventures", "PayPal Ventures", "SBI US Gateway Fund"],
        correct: 2
    },
    {
        question: "What is the total cumulative funding raised by Kite AI, as of the September 2025 Series A announcement?",
        options: ["$15 million", "$18 million", "$33 million", "$40 million"],
        correct: 2
    },
    {
        question: "Which two companies did Kite AI Co-founder and CTO Scott Shi previously build real-time AI infrastructure or serve as a founding engineer for?",
        options: ["Databricks and NEAR", "Uber and Salesforce Einstein AI", "OpenAI and Google", "Polygon and Chainlink"],
        correct: 1
    },
    {
        question: "Kite AI is categorized as an infrastructure platform primarily built for which market segment?",
        options: ["Web2 E-commerce Micro-payments", "AI Code Completion", "Infra Layer1 AI platform", "Traditional Web Services"],
        correct: 2
    },
    {
        question: "In what year was the current Kite AI project officially founded?",
        options: ["2014", "2022", "2024", "2025"],
        correct: 2
    },
    {
        question: "What is the name of Kite AI's flagship product that enables autonomous agents to authenticate and transact in real-world environments?",
        options: ["Agent App Store", "Agent Passport", "Kite AIR (Agent Identity Resolution)", "Kite CodeX"],
        correct: 2
    },
    {
        question: "The Seed funding round of $15 million for Kite AI was announced in which month of 2025?",
        options: ["January", "February", "September", "October"],
        correct: 1
    },
    {
        question: "Which core component of Kite AIR provides a verifiable identity for each agent along with operational guardrails?",
        options: ["Policy Enforcer", "Agent Passport", "Via Protocol Bridge", "Kite Smart Wallet"],
        correct: 1
    },
    {
        question: "Which partner provides an AI-enhanced oracle infrastructure for Real-World Asset (RWA) and DeFi data on the Kite AI network?",
        options: ["Codatta", "BitMind", "APRO", "Masa"],
        correct: 2
    },
    {
        question: "The partnership with which company involves Kite AI providing identity authentication and on-chain settlement for access to 500 million healthcare data points?",
        options: ["OpenAI", "Codatta", "CARV", "Nubila"],
        correct: 1
    },
    {
        question: "Which concept did CEO Chi Zhang state would become the 'dominant UI to digital economies of the future,' necessitating Kite AI's infrastructure?",
        options: ["Decentralized Applications (dApps)", "Large Language Models (LLMs)", "Autonomous agents", "Web3 Gaming"],
        correct: 2
    },
    {
        question: "Kite AI's core infrastructure is designed to facilitate transactions using which method to reduce reliance on legacy card rails?",
        options: ["Fiat currency transfers", "Native stablecoin payments", "Tokenized securities", "Credit lines"],
        correct: 1
    },
    {
        question: "On what date was the Kite Validator Program officially launched?",
        options: ["February 1, 2025", "September 2, 2025", "October 1, 2024", "October 1, 2025"],
        correct: 3
    },
    {
        question: "Which firm, besides PayPal Ventures, was a lead investor in both the Seed and Series A rounds for Kite AI?",
        options: ["Samsung Next", "General Catalyst", "HashKey Capital", "LayerZero"],
        correct: 1
    },
    {
        question: "What key feature is offered by the Kite Agent App Store component of Kite AIR?",
        options: ["Code completion for agents", "Secure API key generation", "Agent discovery and paid access to services (APIs, data, commerce tools)", "Deepfake detection services"],
        correct: 2
    },
    {
        question: "Where did Kite AI Co-founder and CEO Chi Zhang earn his PhD in AI?",
        options: ["MIT", "Harvard", "University of Tokyo", "UC Berkeley"],
        correct: 3
    },
    {
        question: "What specific service does the partner BitMind offer to enhance trust and security on the Kite AI network?",
        options: ["Policy enforcement auditing", "Cryptographic identity verification", "Deepfake detection services", "RWA data streaming"],
        correct: 2
    },
    {
        question: "The historical Kite (2014) AI coding assistant was founded by which individual?",
        options: ["Chi Zhang", "Scott Shi", "Adam Smith", "Justin Potts"],
        correct: 2
    },
    {
        question: "Before shutting down in 2022, the historical Kite (2014) was acquired by which financial technology company for $24.8 million?",
        options: ["PayPal", "Affirm", "Databricks", "General Catalyst"],
        correct: 1
    },
    {
        question: "According to its founder, the historical Kite (2014) failed because the AI technology was not 'tech ready,' requiring what level of improvement to break into the market?",
        options: ["2x improvement", "5x improvement", "10x improvement", "100x improvement"],
        correct: 2
    },
    {
        question: "Which major commerce platform, besides PayPal, is Kite AIR currently integrated with for merchant discoverability by AI shopping agents?",
        options: ["Amazon", "eBay", "Shopify", "Etsy"],
        correct: 2
    },
    {
        question: "The core thesis of Kite AI is to provide a foundational layer that includes real-time payments, programmable governance, cryptographic identity, and what other key capability?",
        options: ["Open-source code library", "Verifiable attribution", "Universal data catalog", "Quantum computing access"],
        correct: 1
    },
    {
        question: "Kite AI was named a 'Top 100 Project' in 2025 at an annual summit hosted by which two entities?",
        options: ["Coinbase and Sequoia", "Silicon Valley 101 x RootData", "PayPal and General Catalyst", "Databricks and Uber"],
        correct: 1
    }
];

// [REST OF THE CODE - DOM Elements, init(), cleanupOldPlayers(), validateAndStart(), etc.]
// Keep all the other functions exactly as in the previous version
