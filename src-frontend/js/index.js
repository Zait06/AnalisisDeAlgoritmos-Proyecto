
const shapesAvailable = ['rectangle', 'circle']

const rectangleForm = `
          Point 1
          <div class="coords-container">
          <label for="x01">x<sub>1</sub>:</label>
            <input class="valueShape" type="number" id="x01" step="50" value="0" placeholder="x" min="0" max="800"/>
            <label for="y01">y<sub>1</sub>:</label>
            <input class="valueShape" type="number" id="y01" step="50" value="0" placeholder="y" min="0" max="800"/>
          </div>
          Point 2
          <div class="coords-container">
            <label for="x02">x<sub>2</sub>:</label>
            <input class="valueShape" type="number" id="x02" step="50" value="0" placeholder="x" min="0" max="800"/>
            <label for="y02">y<sub>2</sub>:</label>
            <input class="valueShape" type="number" id="y02" step="50" value="0" placeholder="y" min="0" max="800"/>
          </div>
`

const circleForm = `
  Center
  <div class="coords-container">
             <label for="x01">x<sub>1</sub>:</label>
            <input class="valueShape" type="number" id="x01" step="50" value="0" placeholder="x" min="0" max="800"/>
            <label for="y01">y<sub>1</sub>:</label>
            <input class="valueShape" type="number" id="y01" step="50" value="0" placeholder="y" min="0" max="800"/>
 </div>
  <label for="radius">Radius:</label>
  <input class="valueShape" type="number" id="radius" step="50" value="0" placeholder="Radius" min="0" max="800"/>
`

const value = []
var selectedShape = "";
var canvas = document.getElementById('plane')
var comboShape = document.getElementById('shape')
var btnCreateShape = document.getElementById('btnCreateShape')

function clearPlane() {
  var ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function clearCoords() {
  const valueShape = document.getElementsByClassName('valueShape')
  for (let vShape of valueShape)
    vShape.value = 0
  value.splice(0)
}

function expectedSize() {
  if (selectedShape === 'rectangle')
    return 4
  if (selectedShape === 'circle')
    return 3
}

canvas.addEventListener('mousemove', (evt) => {
  const canvasRect = canvas.getBoundingClientRect()
  const x = Math.round(evt.clientX - canvasRect.left)
  const y = Math.round(evt.clientY - canvasRect.top)
  var elem = null

  if (!shapesAvailable.includes(selectedShape))
    return

  if (value.length === expectedSize()) return

  clearPlane()
  if (!value.length) {
    elem = document.getElementById('x01')
    elem.value = x
    elem = document.getElementById('y01')
    elem.value = y
  } else if (selectedShape === 'rectangle') {
    elem = document.getElementById('x02')
    elem.value = x
    elem = document.getElementById('y02')
    elem.value = y
    drawRectangle(value[0], value[1], x - value[0], y - value[1])
  } else if (selectedShape === 'circle') {
    const distance = Math.round(euclideanDistance({
      x: value[0],
      y: value[1]
    }, {x, y}))
    elem = document.getElementById('radius')
    elem.value = distance
    drawCircle(value[0], value[1], distance)
  }
})

canvas.addEventListener('click', (evt) => {
  evt.preventDefault()

  if (value.length === expectedSize()) return
  
  const canvasRect = canvas.getBoundingClientRect()
  const x = Math.round(evt.clientX - canvasRect.left)
  const y = Math.round(evt.clientY - canvasRect.top)

  if (selectedShape === 'rectangle') {  
    value.push(x)
    value.push(y)
  } else if (selectedShape === 'circle') {
    if (!value.length) {
      value.push(x)
      value.push(y)
    } else {
      value.push(euclideanDistance({
        x: value[0],
        y: value[1]
      }, {x, y}))
    }
  }
})

comboShape.addEventListener('change', (evt) => {
  const select = evt.target;
  selectedShape = select.value
  value.splice(0)
  if (select.value === 'rectangle')
    document.querySelector('#shapeForm').innerHTML = rectangleForm;
  else if (select.value === 'circle')
    document.querySelector('#shapeForm').innerHTML = circleForm;
})

document.getElementById('btnClean').addEventListener('click', () => {
  clearPlane()
  clearCoords()
})

btnCreateShape.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearPlane()

  const valueShape = document.getElementsByClassName('valueShape')
  value.splice(0)

  for (let idx = 0; idx < valueShape.length; idx++)
    value.push(valueShape[idx].value)

  if (selectedShape === 'rectangle') {
    drawRectangle(value[0], value[1], value[2] - value[0], value[3] - value[1]);
  } else {
    drawCircle(value[0], value[1], value[2])
  }
})

function drawRectangle(x, y, width, height) {
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = "#000";
  ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius) {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function drawAxis() {
  const axisX = document.getElementById('axis-x')
  const axisY = document.getElementById('axis-y')

  let axisLabel = '';
  for (let step = 100; step <= 700; step += 100) {
    axisLabel += `<div class="axis">${step}</div>`
  }

  const canvasRect = canvas.getBoundingClientRect()

  axisX.innerHTML = axisLabel
  axisX.style.width = canvas.width + 100 + 'px'
  axisX.style.left = canvasRect.left + 'px'
  axisX.style.top = (canvasRect.top - 20) + 'px'

  axisY.innerHTML = axisLabel
  axisY.style.height = canvas.height + 'px'
  axisY.style.right = (canvasRect.left - 20) + 'px'
  axisY.style.top = canvasRect.top + 'px'

}

drawAxis()

function euclideanDistance(pointA, pointB) {
  const xd = Math.pow(pointA.x - pointB.x, 2)
  const yd = Math.pow(pointA.x - pointB.x, 2)
  return Math.sqrt(xd + yd)
}