let field = document.getElementById('field');
let turnCount = 0;
let sign;

for(let a = 0; a <= 2; a++) {
  let row = document.createElement('div');
  row.className = 'row';

  field.append(row);
  for(let i = 0; i <= 2; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';

    row.append(cell);
  }
}

let allCells = document.querySelectorAll('.cell'); // Создаем массив который содержит все ячейки

allCells.forEach((cell) => cell.addEventListener('click', (event) => {
  turnCount++;
  
  sign = turnCount % 2 == 0 ? 'X' : '0';

  if (!event.target.innerText.length) { // Проверяем есть ли в ячейке какой нибудь символ
    event.target.innerText = sign;
  }
}));
