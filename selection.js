function selectionSortSteps() {
  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i+1; j < arr.length; j++) {
      recordStep(arr, [minIdx, j]);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      recordStep(arr, [i, minIdx]);
    }
  }
}