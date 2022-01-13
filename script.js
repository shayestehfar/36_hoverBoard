const container = document.getElementById('container')
const SQUARES = 990
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = document.querySelectorAll('.square')

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  container.appendChild(square)
  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseout', () => {
    removeColor(square)
  })
}
function setColor(element) {
  const color = colors[Math.floor(Math.random() * colors.length)]
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = `#1d1d1d`
  element.style.boxShadow = `0 0 2px #000`
}
