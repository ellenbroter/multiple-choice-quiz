const quizInfo = [
  {
    question:
      "What year was YouTube founded?",
    optionA: "2002",
    optionB: "2005",
    optionC: "2008",
    optionD: "2010",
    correctAnswer: "option2",
  },
  {
    question: "Which video became the first to reach one billion views on YouTube?",
    optionA: '"Gangnam Style" by PSY',
    optionB: '"Baby" by Justin Bieber',
    optionC: '"Despacito" by Luis Fonsi ft. Daddy Yankee',
    optionD: '"See You Again" by Wiz Khalifa ft. Charlie Puth',
    correctAnswer: "option1",
  },
  {
    question:
      "Who is the most subscribed YouTuber as of 2022?",
    optionA: "PewDiePie",
    optionB: "T-Series",
    optionC: "Cocomelon",
    optionD: "Dude Perfect",
    correctAnswer: "option1",
  },
  {
    question: "What is the name of YouTube's premium subscription service that offers ad-free viewing and exclusive content?",
    optionA: "YouTube Plus",
    optionB: "YouTube Red",
    optionC: "YouTube Premium",
    optionD: "YouTube Pro",
    correctAnswer: "option3",
  },
  {
    question: 'Which video category does the "YouTube Rewind" typically celebrate each year?',
    optionA: "Gaming",
    optionB: "Music",
    optionC: "Comedy",
    optionD: "Trends and Memes",
    correctAnswer: "option4",
  },
  {
    question: "In 2019, which YouTube personality hosted a live-streamed interview with Elon Musk?",
    optionA: "Casey Neistat",
    optionB: "Shane Dawson",
    optionC: "Joe Rogan",
    optionD: "Emma Chamberlain",
    correctAnswer: "option3",
  },
];

const quizContainer = document.querySelector(".quiz-container");
const options = document.querySelectorAll(".option");
const question = document.querySelector("#question-text");

const optionA_text = document.querySelector("#option-a");
const optionB_text = document.querySelector("#option-b");
const optionC_text = document.querySelector("#option-c");
const optionD_text = document.querySelector("#option-d");
const errorMessage = document.querySelector(".error-message");
const submitButton = document.querySelector(".submit-button");

let currentIndex = 0;
let score = 0;

const deselectOptions = () => {
  options.forEach((option) => {
    option.checked = false;
  });
};

const handleQuiz = () => {
  deselectOptions();
  let currentQuizInfo = quizInfo[currentIndex];
  question.textContent = currentQuizInfo.question;

  optionA_text.textContent = currentQuizInfo.optionA;
  optionB_text.textContent = currentQuizInfo.optionB;
  optionC_text.textContent = currentQuizInfo.optionC;
  optionD_text.textContent = currentQuizInfo.optionD;
};

handleQuiz();

const getSelectedAnswer = () => {
  let selectedAnswer;
  options.forEach((option) => {
    if (option.checked) {
      selectedAnswer = option.id;
    }
  });

  return selectedAnswer;
};

submitButton.addEventListener("click", () => {
  const answer = getSelectedAnswer();

  if (!answer) {
    errorMessage.style.display = "block";
    return;
  } else {
    if (answer === quizInfo[currentIndex].correctAnswer) {
      score++;
    }
  }

  currentIndex++;

  if (currentIndex < quizInfo.length) {
    handleQuiz();
  } else {
    quizContainer.textContent = "";

    const scoreContainer = document.createElement("div");
    scoreContainer.classList.add("score-container");
    quizContainer.append(scoreContainer);

    const scoreMessage = document.createElement("p");
    scoreMessage.textContent = `Your score is ${score} out of ${quizInfo.length}`;
    scoreMessage.classList.add("score-message");
    scoreContainer.append(scoreMessage);

    const reloadButton = document.createElement("button");
    reloadButton.textContent = "Try again!";
    reloadButton.classList.add("reload-button");
    scoreContainer.append(reloadButton);

    reloadButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
});

options.forEach((option) => {
  option.addEventListener("change", () => {
    errorMessage.style.display = "none";
  });
});


