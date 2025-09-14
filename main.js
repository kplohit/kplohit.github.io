const container = document.getElementById("arrayContainer");
let array = [];
let steps = [];
let currentStep = 0;
let originalArray = [];

function generateArray(size = 10) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 20);
  originalArray = [...array];
  steps = [];
  currentStep = 0;
  renderArray(array);
}

function renderArray(arr, activeIndices = []) {
  container.innerHTML = "";
  arr.forEach((val, idx) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${val}px`;
    if (activeIndices.includes(idx)) bar.classList.add("active");
    container.appendChild(bar);
  });
}

function recordStep(arr, active) {
  steps.push({ arr: [...arr], active: [...active] });
}

function startSort() {
  steps = [];
  currentStep = 0;
  const type = document.getElementById("sortType").value;
  switch (type) {
    case "bubble": bubbleSortSteps(); break;
    case "selection": selectionSortSteps(); break;
    case "insertion": insertionSortSteps(); break;
    case "merge": mergeSortStepsWrapper(); break;
    case "quick": quickSortStepsWrapper(); break;
  }
  if (steps.length > 0) showStep(0);
}

function showStep(index) {
  if (index >= 0 && index < steps.length) {
    currentStep = index;
    renderArray(steps[currentStep].arr, steps[currentStep].active);
  }
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentStep < steps.length - 1) showStep(currentStep + 1);
});
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentStep > 0) showStep(currentStep - 1);
});
document.getElementById("resetBtn").addEventListener("click", () => {
  currentStep = 0;
  renderArray(originalArray);
});

generateArray();