import '../index.html';
import '../styles/style.scss';
import {
  rangeInputs,
  numberInputs,
  defaultValues,
  amountInput,
  initialInput,
  percentRangeInput,
  percentInput,
  timeInput,
  leasingForm,
  leasingFormSubmitButton,
  resultAmount,
  resultMonthlyPayment,
  allInputs,
} from '../consts/consts';

function formatValue(input, val) {
  let value = 0;

  if (!val) {
    value = null;
  }

  value = String(val).replace(/(.)(?=(\d{3})+$)/g, '$1 ');

  if (input && input.name === 'percent') {
    value += '%';
  } else if (input && input.name === 'initial') {
    value += ' ₽';
  }

  return value;
}

function convertToNumber(val) {
  const value = parseInt(val.replace(/\s|₽|%/g, ''), 10);

  if (!value || Number.isNaN(value)) {
    return false;
  }

  return value;
}

function findConnectedInput(input) {
  let connectedInput;

  if (input.type === 'range') {
    connectedInput = numberInputs.find((el) => input.name.includes(el.name));
  } else if (input.type === 'text') {
    connectedInput = rangeInputs.find((el) => el.name.includes(input.name));
  }

  return connectedInput;
}

function handleInputChange({ target }) {
  const min = Number(target.min);
  const max = Number(target.max);
  const value = convertToNumber(target.value);
  const connectedInput = findConnectedInput(target);

  if (target.type === 'range') {
    if (target.name === 'percentRange') {
      const initialAmount = Math.ceil(value * 0.01 * convertToNumber(amountInput.value));
      initialInput.value = formatValue(initialInput, initialAmount);
    }

    connectedInput.value = formatValue(connectedInput, value);
    target.style.backgroundSize = `${((value - min) * 100) / (max - min)}% 100%`;
  } else if (target.type === 'text') {
    if (target.name === 'initial') {
      const percentValue = (value / convertToNumber(amountInput.value)) * 100;
      if (value < min || typeof value !== 'number') {
        percentRangeInput.value = percentRangeInput.min;
        percentRangeInput.style.backgroundSize = '1% 1%';
        target.value = formatValue(target, min);
        percentInput.value = formatValue(percentInput, percentInput.min);
      } else if (value > max) {
        percentRangeInput.value = percentRangeInput.max;
        percentRangeInput.style.backgroundSize = '100% 100%';
        target.value = formatValue(target, max);
        percentInput.value = formatValue(percentInput, percentInput.max);
      } else {
        target.value = formatValue(target, value);
        percentRangeInput.value = percentValue;
        percentRangeInput.style.backgroundSize = `${
          ((percentRangeInput.value - percentRangeInput.min) * 100) /
          (percentRangeInput.max - percentRangeInput.min)
        }% 100%`;
        percentInput.value = formatValue(percentInput, percentValue);
      }
      return;
    }

    if (value < min || typeof value !== 'number') {
      connectedInput.value = min;
      connectedInput.style.backgroundSize = '1% 1%';
      target.value = formatValue(target, min);
    } else if (value > max) {
      connectedInput.style.backgroundSize = '100% 100%';
      connectedInput.value = max;
      target.value = formatValue(target, max);
    } else {
      connectedInput.value = value;
      connectedInput.style.backgroundSize = `${((value - min) * 100) / (max - min)}% 100%`;
      target.value = formatValue(target, value);
    }
  }
}

function setInitialAmountInputValue(value) {
  const min = Math.round((convertToNumber(amountInput.value) * 10) / 100);
  const max = Math.round((convertToNumber(amountInput.value) * 60) / 100);

  initialInput.min = min;
  initialInput.max = max;

  const initialAmount = Math.ceil(value * 0.01 * convertToNumber(amountInput.value));
  initialInput.value = formatValue(initialInput, initialAmount);
}

function setInitialRange(input, rangeInput) {
  const min = Number(input.min);
  const max = Number(input.max);
  const value = convertToNumber(input.value);

  if (input.name === 'percent') {
    setInitialAmountInputValue(value);
  }

  rangeInput.style.backgroundSize = `${((value - min) * 100) / (max - min)}% 100%`;
  rangeInput.value = value;
}

function countLeasing() {
  const amount = convertToNumber(amountInput.value);
  const initial = convertToNumber(initialInput.value);
  const time = convertToNumber(timeInput.value);

  resultAmount.textContent = `${formatValue(null, (amount + initial) * time)} ₽`;

  resultMonthlyPayment.textContent = `${formatValue(
    null,
    Math.ceil(((amount - initial) * (0.05 * (1 + 0.05) ** time)) / (1 + 0.05) ** time - 1),
  )} ₽`;
}

function setInitial() {
  numberInputs.forEach((el) => {
    if (typeof defaultValues[el.name] === 'number') {
      el.value = formatValue(el, defaultValues[el.name]);
      setInitialRange(el, findConnectedInput(el));
    }
  });
  countLeasing();
}

function handleLeasingFormSubmit(event) {
  event.preventDefault();

  leasingFormSubmitButton.classList.add('leasing-form__button_loading');
  leasingFormSubmitButton.textContent = '';
  leasingFormSubmitButton.disabled = true;

  const res = {
    'Желаемая сумма кредита': convertToNumber(amountInput.value),
    'Первоначальный взнос': convertToNumber(initialInput.value),
    'Срок лизинга': convertToNumber(timeInput.value),
    'Сумма договора лизинга': convertToNumber(resultAmount.textContent),
    'Ежемесячный платеж от': convertToNumber(resultMonthlyPayment.textContent),
  };

  alert(JSON.stringify(res));

  leasingFormSubmitButton.classList.remove('leasing-form__button_loading');
  leasingFormSubmitButton.textContent = 'Оставить заявку';
  leasingFormSubmitButton.disabled = false;
}

allInputs.forEach((input) => {
  input.addEventListener('change', countLeasing);
});

amountInput.addEventListener('change', () => {
  setInitialAmountInputValue(convertToNumber(percentInput.value));
});

rangeInputs.forEach((input) => {
  input.addEventListener('input', handleInputChange);
});

numberInputs.forEach((input) => {
  input.addEventListener('change', handleInputChange);
});

leasingForm.addEventListener('submit', handleLeasingFormSubmit);

setInitial();
