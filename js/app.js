let colorSelected;
const body = document.querySelector('body');
let colors = ['black', 'white', 'red', 'yellow', 'green', 'blue'];

function addH1() {
  const h1 = document.createElement('h1');
  // const body = document.querySelector('body');
  h1.innerText = 'Pixel Art Generator';
  return body.appendChild(h1);
}

addH1();

function createCanvas() {
  const canvasSize = 10;
  // const body = document.querySelector('body');

  for (var i = 0; i < canvasSize; i++) {
    const row = createRow();
    appendCellsToRow(row, canvasSize);
    body.appendChild(row);
  }

  function createRow() {
    const createdRow = document.createElement('div');
    createdRow.classList.add('row');
    return createdRow;
  }

  function appendCellsToRow(row, canvasSize) {
    for (let i = 0; i < canvasSize; i++) {
      const cells = document.createElement('div');
      cells.classList.add('cell');
      cells.addEventListener('click', () => {
        cells.style.backgroundColor = colorSelected;
      });
      row.appendChild(cells);
    }
  }
}

createCanvas();

function createPalette() {
  const paletteContainer = document.createElement('section');
  paletteContainer.classList.add('paletteContainer');
  for (var i = 0; i < colors.length; i++) {
    const palette = newColorSwatch();
    palette.style.backgroundColor = colors[i];
    // palette.dataset.selectedColor = colors[i];
    paletteContainer.appendChild(palette);
  }
  body.appendChild(paletteContainer);

  function newColorSwatch() {
    const createdPalette = document.createElement('span');
    createdPalette.id = 'palette';
    createdPalette.addEventListener('click', (event) => {
      // colorSelected = event.target.style.selectedColor;
      colorSelected = event.target.style.backgroundColor;
    });
    return createdPalette;
  }
}

createPalette();

function createInput() {
  const form = document.createElement('form');
  const field = document.createElement('input');
  const submit = document.createElement('input');
  const info = document.createElement('a');

  submit.setAttribute('type', 'submit');
  submit.setAttribute('onclick', 'addToArray()');
  submit.setAttribute('value', 'Add One Color');
  field.setAttribute('type', 'text');
  field.classList.add('addColor');
  info.setAttribute('href', 'https://www.w3schools.com/colors/colors_names.asp');
  info.setAttribute('target', 'blank');
  info.innerText = 'W3Schools CSS Color List';
  form.appendChild(submit);
  form.appendChild(field);
  body.appendChild(form);
  body.appendChild(info);
}

createInput();


//used in the submit eventlistener
function addToArray() {
  event.preventDefault();
  let theColor = document.querySelector('.addColor').value;
  let colorToAdd = [];
  colorToAdd.push(theColor);

  // logic from newColorSwatch
  function newColorSwatch() {
    const createdPalette = document.createElement('span');
    createdPalette.id = 'palette';
    createdPalette.addEventListener('click', (event) => {
      colorSelected = event.target.style.backgroundColor;
    });
    return createdPalette;
  }

  function createPalette() {
    const paletteContainer = document.querySelector('.paletteContainer');
    const palette = newColorSwatch();
    palette.style.backgroundColor = colorToAdd[0];
    // palette.dataset.selectedColor = colors[i];
    paletteContainer.appendChild(palette);
    // body.appendChild(paletteContainer);
  }
  createPalette();
}
  // think about decoupling the createPalette function from the function that adds the color circles