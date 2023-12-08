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
      message = "Excelente! Continue estudando  🤗🤗"
      break
    case (performance >= 70):
      message = "Muito bom  🤗🤗"
      break
    case (performance >= 50):
      message = "Bom 😄"
      break
    default:
      message = "Pode melhorar "
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
    question: '<img src="../images/port_quest1.png">',
    answers: [
      { text: "Parede", correct: false },
      { text: "Rede", correct: false },
      { text: "Casa", correct: true },
      { text: "Rua dos bobos", correct: false }
    ]
  },
  {
    question: '<img src="../images/port_quest2.png">',
    answers: [
      { text: "Anúncio", correct: false },
      { text: "Conto", correct: false },
      { text: "Notícia", correct: false },
      { text: "Piada", correct: true }
    ]
  },
  {
    question: '<img src="../images/port_quest3.png">',
    answers: [
      { text: "Adivinha", correct: true },
      { text: "Anúncio", correct: false },
      { text: "Aviso", correct: false },
      { text: "Bilhete", correct: false }
    ]
  },
  {
    question: '<img src="../images/port_quest4.png">',
    answers: [
      { text: "Ensinar", correct: false },
      { text: "Narrar", correct: false },
      { text: "Comunicar", correct: true },
      { text: "Descrever", correct: false }
    ]
  },
  {
    question: '<img src="../images/port_quest5.png">',
    answers: [
      { text: "Estudar", correct: false },
      { text: "Mostrar", correct: true },
      { text: "Juntar", correct: false },
      { text: "Organizar", correct: false }
    ]
  },
  {
    question: '<img src="../images/port_quest6.png">',
    answers: [
      { text: 'O homem comprar o jornal', correct: false },
      { text: 'O homem ter caído na pegadinha do menino', correct: true },
      { text: 'O menino sair gritando pela rua', correct: false },
      { text: "O menino ter uma profissão desde criança", correct: false }
    ]
  },
  {
    question: '<img src="../images/port_quest7.png">',
    answers: [
      { text: "Contar a história da invenção do liquidificador", correct: false },
      { text: "Mostrar os benefícios das frutas na alimentação", correct: false },
      { text: "Instruir o leitor para a realização de uma receita", correct: true },
      { text: "Apresentar as diferenças entre frutas e legumes", correct: false },
    ]
  },
  {
    question: '<img src="../images/port_quest8.png">',
    answers: [
      { text: 'Pensou ter visto um pedaço maior na água. ', correct: true },
      { text: 'Viu sua própria imagem refletida na água.', correct: false },
      { text: 'passou ao lado do rio.', correct: false },
      { text: 'Viu sua imagem indo embora.', correct: false }
    ]
  },
  {
    question: '<img src="../images/port_quest9.png">',
    answers: [
      { text: 'tempo', correct: false },
      { text: 'lugar.', correct: false },
      { text: 'comparação.', correct: false },
      { text: 'possibilidade.', correct: true }
    ]
  },
  {
    question: '<img src="../images/port_quest10.png">',
    answers: [
      { text: 'os vários brinquedos que uma criança ganhou no Dia das Crianças.', correct: false },
      { text: 'crianças brincando sozinhas, esperando seus brinquedos novos.', correct: false },
      { text: 'os brinquedos exclusivos que apenas uma criança irá ganhar.', correct: false },
      { text: 'uma família reunida, que seria melhor que brinquedos novos.', correct: true },
    ]
  },
]