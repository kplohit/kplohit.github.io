function mergeSortStepsWrapper() {
  let arr = [...array];
  function mergeSort(l, r) {
    if (l >= r) return;
    let m = Math.floor((l + r) / 2);
    mergeSort(l, m);
    mergeSort(m+1, r);
    merge(l, m, r);
  }
  function merge(l, m, r) {
    let left = arr.slice(l, m+1);
    let right = arr.slice(m+1, r+1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
      recordStep(arr, [k]);
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      recordStep(arr, [k-1]);
    }
    while (i < left.length) {
      arr[k++] = left[i++];
      recordStep(arr, [k-1]);
    }
    while (j < right.length) {
      arr[k++] = right[j++];
      recordStep(arr, [k-1]);
    }
  }
  mergeSort(0, arr.length - 1);
}