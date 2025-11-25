// Quiz Application Logic
let selectedModules = new Set();
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const moduleButtons = document.querySelectorAll('.module-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
const progressFill = document.getElementById('progress-fill');
const questionNumber = document.getElementById('question-number');
const moduleBadge = document.getElementById('module-badge');
const questionText = document.getElementById('question-text');
const imageContainer = document.getElementById('image-container');
const imageNote = document.getElementById('image-note');
const feedback = document.getElementById('feedback');
const optionsContainer = document.getElementById('options');
const backHomeBtn = document.getElementById('back-home-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Module selection
moduleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const module = btn.dataset.module;
    if (selectedModules.has(module)) {
      selectedModules.delete(module);
      btn.classList.remove('selected');
    } else {
      selectedModules.add(module);
      btn.classList.add('selected');
    }
    startQuizBtn.disabled = selectedModules.size === 0;
  });
});

// Start quiz
startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
  // Gather questions from selected modules
  currentQuestions = [];
  selectedModules.forEach(moduleNum => {
    if (quizData[moduleNum]) {
      quizData[moduleNum].forEach(q => {
        currentQuestions.push({ ...q, module: moduleNum });
      });
    }
  });

  // Shuffle questions (randomize)
  currentQuestions = shuffleArray(currentQuestions);

  // Initialize quiz state
  currentQuestionIndex = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  score = 0;

  // Show quiz container
  startScreen.classList.add('hidden');
  quizContainer.classList.remove('hidden');

  // Display first question
  displayQuestion();
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function displayQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  
  // Update progress bar
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressFill.style.width = `${progress}%`;

  // Update question info
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  moduleBadge.textContent = `Module ${question.module}`;

  // Update question text
  questionText.textContent = question.question;

  // Handle image note if present
    // --- Image handling (Option B: image BELOW question text) ---
    imageContainer.innerHTML = ''; // clear previous content
    if (question.image) {
      // build IMG element and optional caption/note
      const imgEl = document.createElement('img');
      imgEl.src = question.image; // e.g., "assets/img_page3_xref14.png"
      imgEl.alt = "Question image";
      imgEl.className = 'question-image';
  
      imageContainer.appendChild(imgEl);
  
      if (question.note) {
        const noteP = document.createElement('p');
        noteP.id = 'image-note';
        noteP.style.color = '#6b7280';
        noteP.style.marginTop = '10px';
        noteP.textContent = question.note;
        imageContainer.appendChild(noteP);
      }
  
      imageContainer.classList.remove('hidden');
    } else {
      imageContainer.classList.add('hidden');
    }
    // --------------------------------------------------------------
  

  // Clear previous feedback
  feedback.classList.add('hidden');

  // Display options
  displayOptions();

  // Update navigation buttons
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next →';
}

function displayOptions() {
  optionsContainer.innerHTML = '';
  const question = currentQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestionIndex];

  if (question.type === 'fill-blank') {
    // show a text input and a button
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Type your answer here';
    input.className = 'option'; // reuse styling

    if (userAnswer !== null) {
      input.value = userAnswer;
    }

    const submitBtn = document.createElement('button');
    submitBtn.className = 'nav-btn next';
    submitBtn.textContent = 'Submit Answer';
    submitBtn.style.marginTop = '10px';
    submitBtn.addEventListener('click', () => {
      selectOption(input.value.trim());
    });

    optionsContainer.appendChild(input);
    optionsContainer.appendChild(submitBtn);

  } else {
    // multiple-choice / true-false
    question.options.forEach((option) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option';
      optionDiv.textContent = option;

      if (userAnswer !== null && option === userAnswer) {
        optionDiv.classList.add('selected');
      }

      optionDiv.addEventListener('click', () => selectOption(option));
      optionsContainer.appendChild(optionDiv);
    });
  }
}

function selectOption(option) {
  const question = currentQuestions[currentQuestionIndex];
  
  // Save user answer
  userAnswers[currentQuestionIndex] = option;

  // Check if correct
  const isCorrect = option === question.answer;
  if (isCorrect) {
    score++;
  }

  // Show feedback
  feedback.classList.remove('hidden');
  if (isCorrect) {
    feedback.className = 'feedback correct';
    feedback.textContent = '✓ Correct!';
  } else {
    feedback.className = 'feedback wrong';
    feedback.textContent = `✗ Incorrect. The correct answer is: ${question.answer}`;
  }

  // Redisplay options with feedback
  displayOptions();

  // Enable next button after answering
  if (currentQuestionIndex < currentQuestions.length - 1) {
    setTimeout(() => {
      nextBtn.focus();
    }, 500);
  }
}

// Navigation
prevBtn.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
});

backHomeBtn.addEventListener('click', () => {
  // Reset everything
  selectedModules.clear();
  userAnswers = [];
  score = 0;

  // Reset module button selections
  moduleButtons.forEach(btn => btn.classList.remove('selected'));
  startQuizBtn.disabled = true;

  // Show home screen
  quizContainer.classList.add('hidden');
  startScreen.classList.remove('hidden');
});


nextBtn.addEventListener('click', () => {
  if (currentQuestionIndex < currentQuestions.length - 1) {
    // Move to next question
    currentQuestionIndex++;
    displayQuestion();
  } else {
    // Finish quiz
    showResults();
  }
});

function showResults() {
  const percentage = Math.round((score / currentQuestions.length) * 100);
  
  quizContainer.innerHTML = `
    <div class="results">
      <h2 style="font-size: 2.5rem; color: #1f2937; margin-bottom: 20px;">Quiz Complete!</h2>
      <div class="score">${score} / ${currentQuestions.length}</div>
      <div class="results-text">
        You scored ${percentage}%
      </div>
      <button class="start-btn" onclick="location.reload()">Take Quiz Again</button>
    </div>
  `;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
    prevBtn.click();
  } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
    nextBtn.click();
  } else if (e.key >= '1' && e.key <= '9') {
    const optionIndex = parseInt(e.key) - 1;
    const options = optionsContainer.querySelectorAll('.option:not(.disabled)');
    if (options[optionIndex]) {
      options[optionIndex].click();
    }
  }
});
