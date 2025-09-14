let array = [];
let steps = [];
let currentStep = 0;

function generateArray() {
  array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  steps = [];
  currentStep = 0;
  visualize(array);
  prepareSteps();
}

function visualize(arr, activeIndices = []) {
  const container = document.getElementById("numberContainer");
  container.innerHTML = "";
  arr.forEach((num, i) => {
    const div = document.createElement("div");
    div.className = "number";
    if (activeIndices.includes(i)) div.classList.add("active");
    div.textContent = num;
    container.appendChild(div);
  });
}

function prepareSteps() {
  const type = document.getElementById("sortType").value;
  let arr = [...array];
  steps = [];

  if (type === "bubble") {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        steps.push({ arr: [...arr], active: [j, j + 1] });
        if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Add selectionSort and insertionSort similarly
  steps.push({ arr: [...arr], active: [] });
}

function nextStep() {
  if (currentStep < steps.length) {
    const { arr, active } = steps[currentStep];
    visualize(arr, active);
    currentStep++;
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    const { arr, active } = steps[currentStep];
    visualize(arr, active);
  }
}

generateArray();
