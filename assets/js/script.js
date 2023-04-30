document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button')

  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('data-type') == 'submit') {
        checkAnswer()
      } else {
        let gameType = this.getAttribute('data-type')
        runGame(gameType)
      }
    })
  }
})

function runGame (gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1
  let num2 = Math.floor(Math.random() * 25) + 1

  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2)
  } else if (gameType === 'subtract') {
    displaySubtractQuestion(num1, num2)
  } else if (gameType == 'multiply') {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType == 'division') {
    displayDisvisionQuestion(num1, num2);
  }else {
    alert(`unknown game type: ${gameType}`)
    throw `unknown game type: ${gameType} . aborting! `
  }
}

function checkAnswer () {
  document.getElementById('answer-box').value = ''
  let correctAnswer = calculateCorrectAnswer()
  let guess = parseInt(document.getElementById('answer-box').value)
  let correct = correctAnswer[0] === guess
  if (correct) {
    incrementScore()
    alert('Correct Answer!!!')
  } else {
    incrementWrongAnswer()
    alert(`Sorry the answer is ${correctAnswer}, you guesses ${guess}`)
  }
}

function calculateCorrectAnswer () {
  let operand1 = parseInt(document.getElementById('operand1').innerText)
  let operand2 = parseInt(document.getElementById('operand2').innerText)
  let operator = document.getElementById('operator').innerText

  if (operator === '+') {
    return [operand1 + operand2, 'addition']
  } else if (operator === '-') {
    return [operand1 - operand2, 'subtraction']
  } else if (operator === 'x') {
    return [operand1 * operand2, 'multipy']
  } else if (operator === '/') {
    return [(operand1 / operand2).toFixed(2), 'division'];
  } else {
    alert(`Unimplemented operator ${operator}`)
    throw `Unimplemented operator ${operator}. Aborting!`
  }
}

function incrementScore () {
  let currentScore = parseInt(document.getElementById('score').innerText)
  document.getElementById('score').textContent = ++currentScore
}

function incrementWrongAnswer () {
  let currentScore = parseInt(document.getElementById('incorrect').innerText)
  document.getElementById('incorrect').textContent = ++currentScore
}

function displayAdditionQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent = operand1
  document.getElementById('operand2').textContent = operand2
  document.getElementById('operator').textContent = '+'
}

function displaySubtractQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent =
    operand1 > operand2 ? operand1 : operand2
  document.getElementById('operand2').textContent =
    operand2 < operand1 ? operand2 : operand1
  document.getElementById('operator').textContent = '-'
}

function displayMultiplyQuestion (operand1, operand2) {
  document.getElementById('operand1').textContent = operand1
  document.getElementById('operand2').textContent = operand2
  document.getElementById('operator').textContent = 'x'
}

function displayDisvisionQuestion (operand1, operand2) {
    document.getElementById('operand1').textContent =
    operand1 > operand2 ? operand1 : operand2
  document.getElementById('operand2').textContent =
    operand2 < operand1 ? operand2 : operand1
    document.getElementById('operator').textContent = '/'
  }
