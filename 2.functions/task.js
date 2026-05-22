function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (const item of arr) {
    if (item < min) min = item;
    if (item > max) max = item;
    sum += item;
  }

  return { min, max, avg: +( sum / arr.length).toFixed(2) };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0;
  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const item of arr) {
    if (item % 2 === 0) {
      sumEvenElement += item;
    } else {
      sumOddElement += item;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const item of arr) {
    if (item % 2 === 0) {
      sumEvenElement += item;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (const subArr of arrOfArr) {
    const result = func(...subArr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
