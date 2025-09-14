const container = document.getElementById("arrayContainer");
let array = [];

function generateArray(size = 30) {
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 300));
  container.innerHTML = "";
  array.forEach(val => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${val}px`;
    container.appendChild(bar);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSort() {
  const type = document.getElementById("sortType").value;
  switch (type) {
    case "bubble": await bubbleSort(); break;
    case "selection": await selectionSort(); break;
    case "insertion": await insertionSort(); break;
    case "merge": await mergeSortWrapper(); break;
    case "quick": await quickSortWrapper(); break;
  }
}

async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }
      await sleep(50);
      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");
    }
  }
}

// Implement selectionSort, insertionSort, mergeSortWrapper, quickSortWrapper similarly...

generateArray();