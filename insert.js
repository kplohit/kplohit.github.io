function insertionSortSteps() {
  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      recordStep(arr, [j, j+1]);
      arr[j+1] = arr[j];
      j--;
      recordStep(arr, [j+1]);
    }
    arr[j+1] = key;
    recordStep(arr, [j+1]);
  }
}