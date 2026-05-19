"use strict";

function solveEquation(a, b, c) {
  let roots = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return roots;
  } else if (discriminant === 0) {
    roots.push(-b / (2 * a));
  } else {
    roots.push((-b + Math.sqrt(discriminant)) / (2 * a));
    roots.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  countMonths = +countMonths;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return false;
  }

  const monthlyRate = percent / 100 / 12;
  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPayment = loanBody * (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
  const total = monthlyPayment * countMonths;
  return Math.round(total * 100) / 100;
}
