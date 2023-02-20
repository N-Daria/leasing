export const rangeInputs = Array.from(document.querySelectorAll('input[type="range"]'));
export const numberInputs = Array.from(document.querySelectorAll('input[type="text"]'));
export const amountInput = document.querySelector('input[name="amount"]');
export const initialInput = document.querySelector('input[name="initial"]');
export const percentRangeInput = document.querySelector('input[name="percentRange"]');
export const percentInput = document.querySelector('input[name="percent"]');

export const defaultValues = {
  amount: 3300000,
  percent: 10,
  time: 60,
};
