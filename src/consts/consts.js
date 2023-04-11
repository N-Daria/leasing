export const rangeInputs = Array.from(document.querySelectorAll('input[type="range"]'));
export const numberInputs = Array.from(document.querySelectorAll('input[type="text"]'));
export const amountInput = document.querySelector('input[name="amount"]');
export const initialInput = document.querySelector('input[name="initial"]');
export const percentRangeInput = document.querySelector('input[name="percentRange"]');
export const percentInput = document.querySelector('input[name="percent"]');
export const timeInput = document.querySelector('input[name="time"]');
export const leasingForm = document.querySelector('.leasing-form');
export const leasingFormSubmitButton = document.querySelector('.leasing-form__button');
export const resultAmount = document.querySelector('.leasing-form__result-amount');
export const resultMonthlyPayment = document.querySelector('.leasing-form__result-month');
export const allInputs = Array.from(document.querySelectorAll('input'));

export const defaultValues = {
  amount: 3300000,
  percent: 10,
  time: 60,
};
