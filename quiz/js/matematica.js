const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.innerHTML = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Parabéns! Você alcançou um resultado excelente! Continue avançando."
      break
    case (performance >= 70):
      message = "Parabéns! Você alcançou um resultado excelente! Continue avançando."
      break
    case (performance >= 50):
      message = "Você se saiu muito bem! Continue estudando para avançar ainda mais!"
      break
    default:
      message = "Continue estudando. Você tem potencial  para ir muito além!"
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: '<img src="../images/mat_quest1.png">',
    answers: [
      { text: "4 meses", correct: false },
      { text: "8 meses", correct: false },
      { text: "24 meses", correct: false },
      { text: "28 meses", correct: true }
    ]
  },
  {
    question: '<img src="../images/mat_quest2.png">',
    answers: [
      { text: "R$ 77,00", correct: false },
      { text: "R$ 78,00", correct: false },
      { text: "R$ 79,00", correct: true },
      { text: "R$ 80,00", correct: false }
    ]
  },
  {
    question: '<img src="../images/mat_quest3.png">',
    answers: [
      { text: "672 km", correct: true },
      { text: "671 km", correct: false },
      { text: "670 km", correct: false },
      { text: "680 km", correct: false }
    ]
  },
  {
    question: '<img src="../images/mat_quest4.png">',
    answers: [
      { text: "2", correct: false },
      { text: "9", correct: true },
      { text: "8", correct: false },
      { text: "1", correct: false }
    ]
  },
  {
    question: '<img src="../images/mat_quest5.png">',
    answers: [
      { text: "3.996", correct: false },
      { text: "1.132", correct: true },
      { text: "1.032", correct: false },
      { text: "2.302", correct: false }
    ]
  },
  {
    question: '<img src="../images/mat_quest6.png">',
    answers: [
      { text: "156", correct: false },
      { text: "124", correct: false },
      { text: "114", correct: false },
      { text: "104", correct: true }
    ]
  },
  {
    question: '<img src="../images/mat_quest7.png">',
    answers: [
      { text: "melancia", correct: false },
      { text: "banana", correct: true },
      { text: "laranja", correct: false },
      { text: "abacaxi", correct: false }
    ]
  },
  {
    question: '<img src="../images/mat_quest8.png">',
    answers: [
      { text: "R$ 44,30", correct: true },
      { text: "R$ 45,30", correct: false },
      { text: "R$ 44,70", correct: false },
      { text: "R$ 45,00", correct: false }
    ]
  },
  {
    question: '<img src="../images/mat_quest9.png">',
    answers: [
      { text: "12", correct: false },
      { text: "10", correct: false },
      { text: "8", correct: false },
      { text: "6", correct: true }
    ]
  },
  {
    question: '<img src="../images/mat_quest10.png">',
    answers: [
      { text: "R$ 100,00", correct: false },
      { text: "R$ 115,00", correct: false },
      { text: "R$ 250,00", correct: false },
      { text: "R$ 200,00", correct: true }
    ]
  },
  
  
]