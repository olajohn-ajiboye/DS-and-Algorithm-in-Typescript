function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let currentSmallest = Infinity;
  let smallest = Infinity;
  let idxOne = 0;
  let idxTwo = 0;
  let pair: number[] = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstNum = arrayOne[idxOne];
    const secondNum = arrayTwo[idxTwo];
    currentSmallest = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) idxOne++;
    else if (secondNum > firstNum) idxTwo++;
    else if (firstNum === secondNum) pair = [firstNum, secondNum];
    if (currentSmallest < smallest) {
      smallest = currentSmallest;
      pair = [firstNum, secondNum];
    }
  }

  return pair;
}
// Do not edit the line below.
exports.smallestDifference = smallestDifference;
