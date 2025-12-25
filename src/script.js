const chooseSection = document.getElementById("chooseSection");
const topicOptions = document.querySelectorAll(".topic-option");
const numberOptions = document.querySelectorAll(".number-option");
const heading = document.getElementById("heading");
const headerText = document.getElementById("headerText");
const welcomeSection = document.getElementById("welcomeSection");
const progress = document.getElementById("progress");
const quizSection = document.getElementById("quizSection");
const questionNumber = document.getElementById("questionNumber");
const questionText =  document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer")
const feedback = document.getElementById("feedback");
const resultSection = document.getElementById("resultSection");
const resultMessage = document.getElementById("resultMessage");
const resultDetails = document.getElementById("resultDetails");
const scoreCircle = document.getElementById("scoreCircle");
const okayBtn = document.getElementById("okayBtn");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const viewAnswersBtn = document.getElementById("viewAnswersBtn")
const answerReviewSection = document.getElementById("answerReviewSection");
const backToResultsBtn = document.getElementById("backToResultsBtn");
const reviewContainer = document.getElementById("reviewContainer");
const reviewSummaryTitle = document.getElementById("reviewSummaryTitle");
const reviewSummaryStats = document.getElementById("reviewSummaryStats");
const confirmModal = document.getElementById("confirmModal");
const confirmRestartBtn = document.getElementById("confirmRestart");
const cancelRestartBtn = document.getElementById("cancelRestart");
const loadingOverlay = document.getElementById("loadingOverlay");
const timerToggle = document.getElementById("timerToggle");
const timerContainer = document.getElementById("timerContainer");
const timerSeconds = document.getElementById("timerSeconds");
const timerCircle = document.querySelector(".timer-circle");
const timerText = document.querySelector(".timer-text");
const highScoresSection = document.getElementById("highScoresSection");
const highScoresList = document.getElementById("highScoresList");
const clearScoresBtn = document.getElementById("clearScoresBtn");

//* quiz state
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedTopic = "";
let selectedNumQuestions = 10;
let currentStreak = 0;
let highestStreak = 0;
let userAnswers = [];

let timerEnabled = false;
let timerInterval = null;
let timeRemaining = 30;
const TIMER_DURATION = 30;



const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const updateProgress = () => {
    const progressFill = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progress.style.width = progressFill + "%";
}


const showResults = async () => {
    quizSection.classList.remove('active');

    //* to capitalize the topic for header text on quiz result.
    const selectedTopicRadio = document.querySelector('input[name="topic"]:checked');
    const selectedTopic = selectedTopicRadio.value;

    const capitalizeTopic = (topic) => {
        return topic
         //* insert space before capital letters (for "computerScience")
        .replace(/([A-Z])/g, ' $1')
        //* capitalize first letter of each word
        .replace(/\b\w/g, char => char.toUpperCase());
    }
    
    heading.textContent = "Quiz Result";
    headerText.textContent = `Your final score and statistics in ${capitalizeTopic(selectedTopic)}`;

    //* to determine the quiz result and statistics.
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;
    
    scoreCircle.textContent = percentage + '%';
    
    if (passed) {
        resultMessage.textContent = 'Congratulations! You passed!';
        resultMessage.className = 'result-message pass';
    } else {
        resultMessage.textContent = "You didn't pass this time.";
        resultMessage.className = 'result-message fail';
    }
    
    resultDetails.innerHTML = `
        <p>You answered <strong>${score}</strong> out of <strong>${quizQuestions.length}</strong> questions correctly.</p>
        <p>Highest streak: <strong>${highestStreak}</strong></p>
        <p>Your final score: <strong>${percentage}%</strong></p>
        ${!passed ? '<p>You need 70% or higher to pass. Try again!</p>' : ''}
    `;

    // Save high score
    const scoreData = {
        topic: capitalizeTopic(selectedTopic),
        percentage: percentage,
        correct: score,
        total: quizQuestions.length,
        date: Date.now(),
        streak: highestStreak
    };
    
    const newScoreId = await saveHighScore(scoreData);
    
    // Display high scores with highlight on new score
    await displayHighScores(newScoreId);
    
    resultSection.classList.add('show');
}

const showQuestions = () => {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];

        questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
        questionText.textContent = currentQuestion.question;

        answersContainer.innerHTML = "";
        
        //* create buttons for the ansers.
        currentQuestion.answers.forEach((answer, index) => {
            const answerBtn = document.createElement("div");
            answerBtn.className = "answer-option";
            answerBtn.textContent = answer.text;
            answerBtn.addEventListener("click", () => selectAnswers(answer.correct, answerBtn, index));
            answersContainer.appendChild(answerBtn);
        })

        feedback.classList.remove("show", "correct", "incorrect");

        updateProgress();

        //* to start timer for this question
        if (timerEnabled) {
            startTimer();
        }
    } else {
        showResults();
    }
}

const showFeedback = (message, type) => {
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
}

const getCorrectFeedback = (streak) => {
    //* picking a ramdom correct feedback meassage depending on what streak.
    const streakLevel = Math.min(streak, 6);
    const messages = correctFeedbackMessages[streakLevel];
    return messages[Math.floor(Math.random() * messages.length)]
}

const getIncorrectFeedback = () => {
    if (currentStreak > 1) {
        //* feedback if the the streak is broken.
        return "Streak is broken, but you can do it again!";
    } else {
        //* picking a random incorrect feedback message if not on a streak.
        return incorrectFeedbackMessages[Math.floor(Math.random() * incorrectFeedbackMessages.length)];
    }
}

const selectAnswers = (isCorrect, selectedBtn, selectedIndex) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    stopTimer();

    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedIndex,
        isCorrect: isCorrect
    })

    //* disable allw answer buttons.
    const allAnswers = document.querySelectorAll(".answer-option");
    allAnswers.forEach((btn, index) => {
        btn.style.pointerEvents = "none";

        const answerData = currentQuestion.answers[index];

        if(btn === selectedBtn) {
            btn.classList.add(isCorrect ? "correct" : "incorrect");
        } else if (!isCorrect && answerData.correct) {
            btn.classList.add("correct-reveal");
        }
    })

    let feedbackMessage;

    //* to determine what happens if the you pick the correct answer.
    if(isCorrect) {
        score++;
        currentStreak++;

        if (currentStreak > highestStreak) {
            highestStreak = currentStreak;
        }

        feedbackMessage = getCorrectFeedback(currentStreak);

        //* to show the streak on the correct feedback.
        if (currentStreak >= 2) {
            feedbackMessage += ` (${currentStreak} streak!)`;
        }

        showFeedback(feedbackMessage, 'correct');
    } else {
        //* to determine what happens if the you pick an incorrect answer.
        feedbackMessage = getIncorrectFeedback();
        currentStreak = 0;
        showFeedback(feedbackMessage, "incorrect");
    }

    //* to show loading indicator after 1.5 second
    setTimeout(() => {
        loadingOverlay.classList.add("show");
    }, 1500);

    //* to delay showing questions for 2 seconds after selecting an answer.
    setTimeout(() => {
        loadingOverlay.classList.remove("show");
        currentQuestionIndex++;
        showQuestions();
    }, 2000)
}

const selectTopic = (topic) => {
    switch(topic) {
        case "physics":
            quizQuestions = physicsQuestions || [];
            break;
        case "biology":
            quizQuestions = biologyQuestions || [];
            break;
        case "chemistry":
            quizQuestions = chemistryQuestions || [];
            break;
        case "astronomy":
            quizQuestions = astronomyQuestions || [];
            break;
        case "geology":
            quizQuestions = geologyQuestions || [];
            break;
        case "computerScience":
            quizQuestions = computerScienceQuestions || [];
        break;
    }
}


const startQuiz = () => {
    resultSection.classList.remove("show");

    const selectedTopicRadio = document.querySelector('input[name="topic"]:checked');
    const selectedNumberRadio = document.querySelector('input[name="numQuestions"]:checked');

    if (!selectedTopicRadio || !selectedNumberRadio) {
        showError('Please select both a topic and number of questions before starting.');
        return;
    }

    //* store selections
    selectedTopic = selectedTopicRadio.value;
    selectedNumQuestions = parseInt(selectedNumberRadio.value);

    currentQuestionIndex = 0;
    score = 0;
    currentStreak = 0;
    highestStreak = 0;
    userAnswers = [];

    chooseSection.style.display = "none";
    quizSection.classList.add("active");

    //* to put the chosen topic on the header. 
    if (selectedTopic === "computerScience") {
        heading.textContent = "Computer Science";
    } else {
        //! I did the capitalizing in the css. 
        heading.textContent = selectedTopic;
    }
    headerText.textContent = "Choose the button of the correct answer";

    timerEnabled = timerToggle.checked;
    
    if (timerEnabled) {
        timerContainer.classList.add('show');
    }

    selectTopic(selectedTopic);

    quizQuestions = shuffleQuestions(quizQuestions).slice(0, selectedNumQuestions);

    showQuestions();
}


const startTimer = () => {
    if (!timerEnabled) return;

    timeRemaining = TIMER_DURATION;
    updateTimerDisplay();

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

const updateTimerDisplay = () => {
    timerSeconds.textContent = timeRemaining;
    
    const percentage = timeRemaining / TIMER_DURATION;
    const offset = 283 - (283 * percentage);
    timerCircle.style.strokeDashoffset = offset;
    
    // Color changes
    timerCircle.classList.remove('warning', 'danger');
    timerText.classList.remove('warning', 'danger');
    
    if (timeRemaining <= 5) {
        timerCircle.classList.add('danger');
        timerText.classList.add('danger');
    } else if (timeRemaining <= 10) {
        timerCircle.classList.add('warning');
        timerText.classList.add('warning');
    }
};

const stopTimer = () => {
    clearInterval(timerInterval);
};

const handleTimeout = () => {
    // Auto-select wrong answer or skip
    const allAnswers = document.querySelectorAll(".answer-option");
    allAnswers.forEach(btn => {
        btn.style.pointerEvents = "none";
        const answerText = btn.textContent;
        const correctAnswer = quizQuestions[currentQuestionIndex].answers.find(a => a.correct);
        
        if (btn.textContent === correctAnswer.text) {
            btn.classList.add("correct-reveal");
        }
    });
    
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: -1, // -1 indicates timeout
        isCorrect: false
    });
    
    currentStreak = 0;
    showFeedback("Time's up! Moving to next question...", "incorrect");
    
    setTimeout(() => {
        loadingOverlay.classList.add('show');
    }, 1000);
    
    setTimeout(() => {
        loadingOverlay.classList.remove('show');
        currentQuestionIndex++;
        showQuestions();
    }, 2000);
};



const restartQuiz = () => {

    stopTimer();
    timerContainer.classList.remove("show");

    chooseSection.style.display = "block";
    resultSection.classList.remove("show");
    quizSection.classList.remove("active");
    answerReviewSection.classList.remove("show"); 

    //* reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    currentStreak = 0;
    highestStreak = 0;
    selectedTopic = "";
    selectedNumQuestions = 10;
    userAnswers = [];

    //* reset UI elements
    heading.textContent = "Science Quiz";
    headerText.textContent = "This quiz will test your knowledge in Science";
    scoreCircle.textContent = '0%';
    resultMessage.textContent = '';
    resultDetails.innerHTML = '';
    feedback.classList.remove('show', 'correct', 'incorrect');
    answersContainer.innerHTML = '';
    progress.style.width = '0%';

    //* clear selected visual states and radio checks
    topicOptions.forEach(opt => opt.classList.remove('selected'));
    numberOptions.forEach(opt => opt.classList.remove('selected'));

    const checkedTopic = document.querySelector('input[name="topic"]:checked');
    if (checkedTopic) {
        checkedTopic.checked = false;
    }

    const checkedNum = document.querySelector('input[name="numQuestions"]:checked');
    if (checkedNum) {
        checkedNum.checked = false;
    }
}

const viewAnswers = () => {
    resultSection.classList.remove("show");
    answerReviewSection.classList.add("show");

    const selectedTopicRadio = document.querySelector("input[name=topic]:checked");
    const selectedTopic = selectedTopicRadio.value;

    const capitalizeTopic = (topic) => {
        return topic
            .replace(/([A-Z])/g, ' $1')
            .replace(/\b\w/g, char => char.toUpperCase());
    };

    heading.textContent = "Answer Review";
    headerText.textContent = `Detailed review of your ${capitalizeTopic(selectedTopic)} quiz`;

    const percentage = Math.round((score / quizQuestions.length) * 100);
    reviewSummaryTitle.textContent = `Quiz Review - ${capitalizeTopic(selectedTopic)}`;
    reviewSummaryStats.innerHTML = `
        Score: <strong>${score}/${quizQuestions.length}</strong> (${percentage}%)  <br>
        Correct: <strong>${score}</strong>  <br>
        Incorrect: <strong>${quizQuestions.length - score}</strong> <br> 
        Highest Streak: <strong>${highestStreak}</strong>
    `;

    reviewContainer.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer ? userAnswer.isCorrect : false;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-question-card';
        
        // Build the answers HTML
        const answersHTML = question.answers.map((answer, answerIndex) => {
            let classes = ['review-answer'];
            
            if (answer.correct) {
                classes.push('correct-answer');
            }
            
            if (userAnswer && userAnswer.selectedAnswer === answerIndex) {
                classes.push('user-selected');
                if (!answer.correct) {
                    classes.push('incorrect');
                }
            }
            
            return `<div class="${classes.join(' ')}">${answer.text}</div>`;
        }).join('');

        // ADD EXPLANATION HTML (only if question has explanation)
        const explanationHTML = question.explanation ? `
            <div class="review-explanation">
                <div class="review-explanation-title">
                    <span class="review-explanation-icon">💡</span>
                    <span>Explanation</span>
                </div>
                <div class="review-explanation-text">${question.explanation}</div>
            </div>
        ` : '';
        
        reviewCard.innerHTML = `
            <div class="review-question-header">
                <div class="review-question-number">Question ${index + 1} of ${quizQuestions.length}</div>
                <div class="review-result-badge ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? 'Correct' : 'Incorrect'}
                </div>
            </div>
            <div class="review-question-text">${question.question}</div>
            <div class="review-answers">
                ${answersHTML}
            </div>
            ${explanationHTML}
        `;
        
        reviewContainer.appendChild(reviewCard);
    });
};


const backToResults = () => {
    answerReviewSection.classList.remove("show");
    resultSection.classList.add("show");

    const selectedTopicRadio = document.querySelector('input[name="topic"]:checked');
    const selectedTopic = selectedTopicRadio.value;

    const capitalizeTopic = (topic) => {
        return topic
            .replace(/([A-Z])/g, ' $1')
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    heading.textContent = "Quiz Result";
    headerText.textContent = `Your final score and statistics in ${capitalizeTopic(selectedTopic)}`;
}


const showError = (message) => {
    // Remove any existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Create new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Insert before the start button
    const startBtn = document.getElementById('startBtn');
    startBtn.parentNode.insertBefore(errorDiv, startBtn);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        errorDiv.style.opacity = '0';
        errorDiv.style.transform = 'translateY(-10px)';
        setTimeout(() => errorDiv.remove(), 300);
    }, 4000);

}


const saveHighScore = async (scoreData) => {
    try {
        // Generate unique ID for this score
        const scoreId = `score_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        
        await window.storage.set(scoreId, JSON.stringify(scoreData));
        return scoreId;
    } catch (error) {
        console.error('Error saving high score:', error);
        return null;
    }
};

const loadHighScores = async () => {
    try {
        const result = await window.storage.list('score_');
        
        if (!result || !result.keys || result.keys.length === 0) {
            return [];
        }
        
        // Fetch all scores
        const scores = [];
        for (const key of result.keys) {
            try {
                const scoreResult = await window.storage.get(key);
                if (scoreResult && scoreResult.value) {
                    const scoreData = JSON.parse(scoreResult.value);
                    scores.push({ id: key, ...scoreData });
                }
            } catch (err) {
                console.error(`Error loading score ${key}:`, err);
            }
        }
        
        // Sort by percentage (descending), then by date (newest first)
        scores.sort((a, b) => {
            if (b.percentage !== a.percentage) {
                return b.percentage - a.percentage;
            }
            return b.date - a.date;
        });
        
        // Keep top 10 scores
        return scores.slice(0, 10);
    } catch (error) {
        console.error('Error loading high scores:', error);
        return [];
    }
};

const displayHighScores = async (newScoreId = null) => {
    const scores = await loadHighScores();
    
    highScoresList.innerHTML = '';
    
    if (scores.length === 0) {
        highScoresList.innerHTML = '<div class="no-scores-message">No high scores yet. Be the first!</div>';
        clearScoresBtn.style.display = 'none';
        return;
    }
    
    clearScoresBtn.style.display = 'block';
    
    scores.forEach((score, index) => {
        const scoreItem = document.createElement('div');
        scoreItem.className = 'high-score-item';
        
        if (score.id === newScoreId) {
            scoreItem.classList.add('new-score');
        }
        
        const rank = index + 1;
        const rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : '';
        
        const passed = score.percentage >= 70;
        const passClass = passed ? 'pass' : 'fail';
        
        const date = new Date(score.date);
        const dateStr = date.toLocaleDateString();
        
        scoreItem.innerHTML = `
            <div class="score-rank ${rankClass}">#${rank}</div>
            <div class="score-details">
                <div class="score-topic">${score.topic}</div>
                <div class="score-info">${score.correct}/${score.total} • ${dateStr}</div>
            </div>
            <div class="score-percentage ${passClass}">${score.percentage}%</div>
        `;
        
        highScoresList.appendChild(scoreItem);
    });
};

const clearAllScores = async () => {
    // Show confirmation modal
    const confirmed = confirm('Are you sure you want to delete all high scores? This cannot be undone.');
    
    if (!confirmed) return;
    
    try {
        const result = await window.storage.list('score_');
        
        if (result && result.keys) {
            for (const key of result.keys) {
                await window.storage.delete(key);
            }
        }
        
        displayHighScores();
    } catch (error) {
        console.error('Error clearing scores:', error);
    }
};



//! ==== Event Listerners ==== 

document.addEventListener("DOMContentLoaded", () => {

    topicOptions.forEach(option => {

        option.setAttribute("tabindex", "0");

        option.addEventListener("click", function(){
            topicOptions.forEach(opt => opt.classList.remove("selected"));

            this.classList.add("selected");

            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        })

        // keyboard support
        option.addEventListener("keydown", function(e) {
            if(e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.click();
            }
        })
    })

    numberOptions.forEach(option => {

        option.setAttribute("tabindex", "0");

        option.addEventListener("click", function() {
            numberOptions.forEach(opt => opt.classList.remove("selected"));

            this.classList.add("selected");

            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
            }
        })

        option.addEventListener("keydown", function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.click();
            }
        })

    })
})


okayBtn.addEventListener("click", () => {
    // Navigate to instructions
    welcomeSection.style.display = "none";
    chooseSection.style.display = "block";
    
})

startBtn.addEventListener("click", startQuiz);

restartBtn.addEventListener("click", () => {
    //* to show confirmation modal
    confirmModal.classList.add("show");
    document.body.style.overflow = "hidden"; 
})

confirmRestartBtn.addEventListener("click", () => {
    confirmModal.classList.remove("show");
    document.body.style.overflow = "";
    restartQuiz();
})

cancelRestartBtn.addEventListener("click", () => {
    confirmModal.classList.remove("show");
    document.body.style.overflow = ""; // Restore scrolling
});

// Close modal when clicking outside
confirmModal.addEventListener("click", (e) => {
    if (e.target === confirmModal) {
        confirmModal.classList.remove("show");
        document.body.style.overflow = "";
    }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && confirmModal.classList.contains("show")) {
        confirmModal.classList.remove("show");
        document.body.style.overflow = "";
    }
});

clearScoresBtn.addEventListener("click", clearAllScores);

viewAnswersBtn.addEventListener("click", viewAnswers);

backToResultsBtn.addEventListener("click", backToResults);

