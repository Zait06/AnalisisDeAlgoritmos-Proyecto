

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

var comboShape = document.getElementById('shape')
var selectedShape = "";

comboShape.addEventListener('change', (evt) => {
  const select = evt.target;
  selectedShape = select.value
  if (select.value === 'rectangle')
    document.querySelector('#shapeForm').innerHTML = rectangleForm;
  else if (select.value === 'circle')
    document.querySelector('#shapeForm').innerHTML = circleForm;
})

var canvas = document.getElementById('plane')
var btnCreateShape = document.getElementById('btnCreateShape')
const clearPlane = () => {
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('btnClean').addEventListener('click', clearPlane)

btnCreateShape.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearPlane()

  const valueShape = document.getElementsByClassName('valueShape')
  const value = []

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
