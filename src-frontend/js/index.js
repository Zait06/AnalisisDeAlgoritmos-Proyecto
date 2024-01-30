

const rectangleForm = `
          Point 1
          <div class="coords-container">
            <label for="x01">x<sub>1</sub>:</label>
            <input type="number" id="x01" step="10" value="0" placeholder="x" />
            <label for="y01">y<sub>1</sub>:</label>
            <input type="number" id="y01" step="10" value="0" placeholder="y" />
          </div>
          Point 2
          <div class="coords-container">
            <label for="x02">x<sub>2</sub>:</label>
            <input type="number" id="x02" step="10" value="0" placeholder="x" />
            <label for="y02">y<sub>2</sub>:</label>
            <input type="number" id="y02" step="10" value="0" placeholder="y" />
          </div>
`

const circleForm = `
  Center
  <div class="coords-container">
             <label for="x01">x<sub>1</sub>:</label>
            <input type="number" id="x01" step="10" value="0" placeholder="x" />
            <label for="y01">y<sub>1</sub>:</label>
            <input type="number" id="y01" step="10" value="0" placeholder="y" />
 </div>
  <label for="radius">Radius:</label>
  <input type="number" id="radius" step="10" value="0" placeholder="Radius" />
`

var selectedShape = document.getElementById('shape')

selectedShape.addEventListener('change', (evt) => {
  const select = evt.target;
  if (select.value === 'rectangle')
    document.querySelector('#shapeForm').innerHTML = rectangleForm;
  else
    document.querySelector('#shapeForm').innerHTML = circleForm;
})


