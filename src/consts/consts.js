export const leasingForm = document.querySelector('.leasing-form');
export const allInputs = Array.from(leasingForm.querySelectorAll('input'));
export const rangeInputs = Array.from(leasingForm.querySelectorAll('input[type="range"]'));
export const numberInputs = Array.from(leasingForm.querySelectorAll('input[type="text"]'));

export const amountInput = leasingForm.querySelector('input[name="amount"]');
export const initialInput = leasingForm.querySelector('input[name="initial"]');
export const percentRangeInput = leasingForm.querySelector('input[name="percentRange"]');
export const percentInput = leasingForm.querySelector('input[name="percent"]');
export const timeInput = leasingForm.querySelector('input[name="time"]');

export const leasingFormSubmitButton = leasingForm.querySelector('.leasing-form__button');
export const resultAmount = leasingForm.querySelector('.leasing-form__result-amount');
export const resultMonthlyPayment = leasingForm.querySelector('.leasing-form__result-month');

export const defaultValues = {
  amount: 3300000,
  percent: 10,
  time: 60,
};
