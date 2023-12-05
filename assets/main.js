function isPrime (num) {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function generateNumbers () {
  const container = document.getElementById('number-container')

  for (let i = 0; i < 10000; i++) {
    const number = Math.floor(Math.random () * 1000) + 1
    const cell = document.createElement('div')

    // Set the text content of the cell to the generated number
    cell.textContent = number

    if (number % 2 === 0) {
      cell.classList.add('cell', 'even')
    } else {
      cell.classList.add('cell', 'odd')
    }

    if (isPrime(number)) {
      cell.classList.add('prime')
    }

    container.appendChild(cell)
  }
}

generateNumbers()
