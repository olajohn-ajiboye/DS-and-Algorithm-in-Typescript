function swap(array: number[], index1: number, index2: number) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

const bubbleSort = (array: number[]) => {
  let swapped;
  do {
    swapped = false;

    for (const [i, num] of array.entries()) {
      if (num && array[i + 1] && num > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};
