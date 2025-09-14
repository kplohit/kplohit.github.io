function bubbleSortSteps() {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      recordStep(arr, [j, j+1]);
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        recordStep(arr, [j, j+1]);
      }
    }
  }
}