let grid = prompt();
let div = document.getElementById("container");

let reset = document.getElementById("reset");
reset.addEventListener("click", () => reload());
function reload() {
  console.log("reload");
  location.reload();
}

if (parseInt(grid) <= 65) {
  for (let i = 0; i < parseInt(grid) * parseInt(grid); i++) {
    var node = document.createElement("div");
    node.classList.add("elem");
    div.appendChild(node);
    div.classList.add("sketch");
    document.querySelector(".btn").style.display = "flex";
  }
} else {
  alert("Enter a number between 0 and 65");
  location.reload();
}

let elem = document.querySelectorAll(".elem");
let clear = document.querySelector("#clear");

elem.forEach(element => {
  clear.addEventListener("click", () => remove(element));
  element.addEventListener("mouseenter", () => {
    event(element);
  });
});
function remove(element) {
  element.classList.remove("hover");
}
function event(element) {
  element.classList.add("hover");
}

div.style.gridTemplateColumns = `repeat(${parseInt(grid)}, 1fr)`;