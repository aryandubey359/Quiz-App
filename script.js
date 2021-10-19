const quizQuestions = [
  {
    question: "The great Victoria Desert is located in which country?",
    a: "Canada",
    b: "West Africa",
    c: "Australia",
    d: "North America",
    ans: "c",
  },
  {
    question: "The intersecting lines drawn on maps and globes are?",
    a: "latitudes",
    b: "longitudes",
    c: "geographic grids",
    d: "None of the above",
    ans: "c",
  },
  {
    question: "The landmass of which of the following continents is the least?",
    a: "Africa",
    b: "Asia",
    c: "Australia",
    d: "Europe",
    ans: "c",
  },
  {
    question: "Which of the following is tropical grassland?",
    a: "Taiga",
    b: "Savannah",
    c: "Pampas",
    d: "Prairies",
    ans: "b",
  },
  {
    question: "The temperature increases rapidly after?",
    a: "ionosphere",
    b: "exosphere",
    c: "exosphere",
    d: "troposphere",
    ans: "a",
  },
];
const question = document.getElementById("question");
const optiona = document.getElementById("optiona");
const optionb = document.getElementById("optionb");
const optionc = document.getElementById("optionc");
const optiond = document.getElementById("optiond");
const submit = document.getElementById("submit");
const button = document.getElementById("button");
const answerA = document.getElementById("a");
const answerB = document.getElementById("b");
const answerC = document.getElementById("c");
const answerD = document.getElementById("d");
const quiz = document.getElementById("quizcontainer");
let currentQuestion = 0;
let score = 0;
let correct = 0;

function checkSelected() {
  if (
    answerA.checked == false &&
    answerB.checked == false &&
    answerC.checked == false &&
    answerD.checked == false
  ) {
    alert("Please select an Answer before moving on to the next Question.");
  } else {
    currentQuestion++;
    if (currentQuestion == quizQuestions.length - 1) {
      button.innerText = "Submit";
      loadQuiz();
    } else if (button.innerText == "Submit") {
      quiz.innerHTML = "<h1>Congratulations on Successfully completing the Quiz! Your got " + correct + " Questions right out of 5. Your score is: " + score + "/50.</h1>";
      console.log(score);
    } else {
      loadQuiz();
    }
  }
}

function loadQuiz() {
  const currentQuizQuestion = quizQuestions[currentQuestion];
  const ans = currentQuizQuestion.ans;
  question.innerText = currentQuizQuestion.question;
  optiona.innerText = currentQuizQuestion.a;
  optionb.innerText = currentQuizQuestion.b;
  optionc.innerText = currentQuizQuestion.c;
  optiond.innerText = currentQuizQuestion.d;
  answerA.checked = false;
  answerB.checked = false;
  answerC.checked = false;
  answerD.checked = false;
}

loadQuiz();

function checkAnswer() {
  const currentQuizQuestion = quizQuestions[currentQuestion];
  const ans = currentQuizQuestion.ans;
  if (answerA.checked == true && ans == "a") {
    correct++;
    score = score + 10;
    console.log(score);
  } else if (answerB.checked == true && ans == "b") {
    correct++;
    score = score + 10;
    console.log(score);
  } else if (answerC.checked == true && ans == "c") {
    correct++;
    score = score + 10;
    console.log(score);
  } else if (answerD.checked == true && ans == "d") {
    correct++;
    score = score + 10;
    console.log(score);
  }
  checkSelected();
}

submit.addEventListener("click", () => {
  checkAnswer();
});


