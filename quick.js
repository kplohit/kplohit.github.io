function quickSortStepsWrapper() {
  let arr = [...array];
  function quickSort(low, high) {
    if (low < high) {
      let pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  }
  function partition(low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      recordStep(arr, [j, high]);
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        recordStep(arr, [i, j]);
      }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    recordStep(arr, [i+1, high]);
    return i+1;
  }
  quickSort(0, arr.length - 1);
}