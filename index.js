const canvas = document.querySelector(".editor-canvas");
const pencil = document.getElementById("editor-pencil");
const eraser = document.getElementById("editor-eraser");
const clear = document.getElementById("editor-clear");
const editorStatus = document.querySelector(".editor-status");
let option = null;
let state = null;

const draw = (e) => {
  if (option == "pencil" && state === "active")
    e.target.style.background = "#000000";
  else if (option == "eraser" && state === "active")
    e.target.style.background = "#FFFFFF";
};

const changeState = () => {
  if (state == null) {
    state = "active";
    editorStatus.innerHTML = "Active";
  } else {
    state = null;
    editorStatus.innerHTML = "InActive";
  }
};

const drawCanvas = (canvas) => {
  for (let i = 1; i <= 1000; i++) {
    canvas.innerHTML += `<div class="pixel" id="pixel${i}"></div>`;
  }
};

const handleEvents = () => {
  for (let i = 1; i <= 1000; i++) {
    const ele = document.getElementById(`pixel${i}`);
    ele.addEventListener("click", changeState);
    ele.addEventListener("mouseover", draw);
  }
};

// Set Up Drawing Options
pencil.addEventListener("click", () => {
  if (option === null) {
    option = "pencil";
  } else if (option === "eraser") {
    option = "pencil";
  } else {
    option = null;
  }

  // Toggle Pencil
  if (option == "pencil") pencil.style.background = "#000000";
  else pencil.style.background = "#163059";
  if (option == "eraser") eraser.style.background = "#000000";
  else eraser.style.background = "#163059";

  // Make status inactive
  if (state) {
    state = null;
    editorStatus.innerHTML = "InActive";
  }
});

eraser.addEventListener("click", () => {
  if (option === null) {
    option = "eraser";
  } else if (option === "pencil") {
    option = "eraser";
  } else {
    option = null;
  }

  // Toggle Eraser
  if (option == "pencil") pencil.style.background = "#000000";
  else pencil.style.background = "#163059";
  if (option == "eraser") eraser.style.background = "#000000";
  else eraser.style.background = "#163059";

  // Make status inactive
  if (state) {
    state = null;
    editorStatus.innerHTML = "InActive";
  }
});

clear.addEventListener("click", () => {
  for (let i = 1; i <= 1000; i++) {
    const ele = document.getElementById(`pixel${i}`);
    ele.style.background = "#FFFFFF";
  }
  if (state) {
    state = null;
    editorStatus.innerHTML = "InActive";
  }
});

// Draw the Canvas
drawCanvas(canvas);
handleEvents();
