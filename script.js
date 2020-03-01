const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
      console.log('makeRows');
    };
  };

makeRows(16, 16);
console.log(document.getElementById("container"));