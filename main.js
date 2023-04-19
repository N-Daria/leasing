/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/consts/consts.js":
/*!******************************!*\
  !*** ./src/consts/consts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allInputs": () => (/* binding */ allInputs),
/* harmony export */   "amountInput": () => (/* binding */ amountInput),
/* harmony export */   "amountRangeInput": () => (/* binding */ amountRangeInput),
/* harmony export */   "defaultValues": () => (/* binding */ defaultValues),
/* harmony export */   "initialInput": () => (/* binding */ initialInput),
/* harmony export */   "leasingForm": () => (/* binding */ leasingForm),
/* harmony export */   "leasingFormSubmitButton": () => (/* binding */ leasingFormSubmitButton),
/* harmony export */   "numberInputs": () => (/* binding */ numberInputs),
/* harmony export */   "percentInput": () => (/* binding */ percentInput),
/* harmony export */   "percentRangeInput": () => (/* binding */ percentRangeInput),
/* harmony export */   "rangeInputs": () => (/* binding */ rangeInputs),
/* harmony export */   "resultAmount": () => (/* binding */ resultAmount),
/* harmony export */   "resultMonthlyPayment": () => (/* binding */ resultMonthlyPayment),
/* harmony export */   "timeInput": () => (/* binding */ timeInput)
/* harmony export */ });
const leasingForm = document.querySelector('.leasing-form');
const allInputs = Array.from(leasingForm.querySelectorAll('input'));
const rangeInputs = Array.from(leasingForm.querySelectorAll('input[type="range"]'));
const numberInputs = Array.from(leasingForm.querySelectorAll('input[type="text"]'));
const amountInput = leasingForm.querySelector('input[name="amount"]');
const amountRangeInput = leasingForm.querySelector('input[name="amountRange"]');
const initialInput = leasingForm.querySelector('input[name="initial"]');
const percentRangeInput = leasingForm.querySelector('input[name="percentRange"]');
const percentInput = leasingForm.querySelector('input[name="percent"]');
const timeInput = leasingForm.querySelector('input[name="time"]');
const leasingFormSubmitButton = leasingForm.querySelector('.leasing-form__button');
const resultAmount = leasingForm.querySelector('.leasing-form__result-amount');
const resultMonthlyPayment = leasingForm.querySelector('.leasing-form__result-month');
const defaultValues = {
  amount: 3300000,
  percent: 10,
  time: 60
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"ru\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>car leasing</title>\n  </head>\n\n  <body class=\"body\">\n    <form class=\"leasing-form\">\n      <h1 class=\"leasing-form__header\">Рассчитайте стоимость автомобиля в&nbsp;лизинг</h1>\n\n      <fieldset class=\"leasing-form__input-set\">\n        <legend class=\"leasing-form__input-header\">Желаемая сумма кредита</legend>\n        <div class=\"leasing-form__form-icon leasing-form__form-icon_rub\">\n          <input\n            type=\"text\"\n            min=\"1500000\"\n            max=\"10000000\"\n            name=\"amount\"\n            class=\"leasing-form__input\"\n            maxlength=\"10\"\n          />\n        </div>\n        <input\n          type=\"range\"\n          name=\"amountRange\"\n          min=\"1500000\"\n          max=\"10000000\"\n          class=\"leasing-form__input_range\"\n        />\n      </fieldset>\n\n      <fieldset class=\"leasing-form__input-set\">\n        <legend class=\"leasing-form__input-header\">Первоначальный взнос</legend>\n        <input type=\"text\" name=\"initial\" class=\"leasing-form__input\" maxlength=\"11\" />\n        <input\n          type=\"text\"\n          min=\"10\"\n          max=\"60\"\n          name=\"percent\"\n          class=\"leasing-form__input leasing-form__input_percent\"\n          maxlength=\"3\"\n        />\n        <input\n          type=\"range\"\n          name=\"percentRange\"\n          min=\"10\"\n          max=\"60\"\n          class=\"leasing-form__input_range\"\n        />\n      </fieldset>\n\n      <fieldset class=\"leasing-form__input-set\">\n        <legend class=\"leasing-form__input-header\">Срок лизинга</legend>\n        <div class=\"leasing-form__form-icon leasing-form__form-icon_month\">\n          <input\n            type=\"text\"\n            min=\"6\"\n            max=\"120\"\n            name=\"time\"\n            class=\"leasing-form__input\"\n            maxlength=\"3\"\n          />\n        </div>\n        <input type=\"range\" name=\"timeRange\" min=\"6\" max=\"120\" class=\"leasing-form__input_range\" />\n      </fieldset>\n\n      <div class=\"leasing-form__result-block\">\n        <div class=\"leasing-form__block\">\n          <p class=\"leasing-form__result-header\">Сумма договора лизинга</p>\n          <p class=\"leasing-form__result-amount leasing-form__result-text\"></p>\n        </div>\n\n        <div class=\"leasing-form__block\">\n          <p class=\"leasing-form__result-header\">Ежемесячный платеж от</p>\n          <p class=\"leasing-form__result-month leasing-form__result-text\"></p>\n        </div>\n      </div>\n\n      <button class=\"leasing-form__button\" type=\"submit\">Оставить заявку</button>\n    </form>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./src/index.html");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _consts_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/consts */ "./src/consts/consts.js");



function formatValue(input, val) {
  if (!val) {
    return null;
  }
  let value = 0;
  const formatter = new Intl.NumberFormat('ru');
  value = formatter.format(val);
  if (input && input.name === 'percent') {
    value.slice(0, 1);
    value += '%';
  } else if (input && input.name === 'initial') {
    value += ' ₽';
  }
  return value;
}
function convertToNumber(val) {
  const value = parseInt(val.replace(/\s|₽|%/g, ''), 10);
  if (!value || Number.isNaN(value)) {
    return null;
  }
  return value;
}
function findConnectedInput(input) {
  let connectedInput;
  if (input.type === 'range') {
    connectedInput = _consts_consts__WEBPACK_IMPORTED_MODULE_2__.numberInputs.find(el => input.name.includes(el.name));
  } else if (input.type === 'text') {
    connectedInput = _consts_consts__WEBPACK_IMPORTED_MODULE_2__.rangeInputs.find(el => el.name.includes(input.name));
  }
  return connectedInput;
}
function handleInputChange(_ref) {
  let {
    target
  } = _ref;
  const min = Number(target.min);
  const max = Number(target.max);
  const value = convertToNumber(target.value);
  let connectedInput = findConnectedInput(target);
  if (target.name === 'initial') {
    connectedInput = _consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentRangeInput;
  }
  if (target.type === 'range') {
    if (target.name === 'percentRange') {
      const initialAmount = Math.ceil(value * 0.01 * convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value));
      _consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput, initialAmount);
    }
    connectedInput.value = formatValue(connectedInput, value);
    target.style.backgroundSize = `${(value - min) * 100 / (max - min)}% 100%`;
  } else if (target.type === 'text') {
    if (value < min || typeof value !== 'number') {
      connectedInput.style.backgroundSize = '1% 1%';
      target.value = formatValue(target, min);
      if (target.name === 'initial') {
        connectedInput.value = connectedInput.min;
        _consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput, _consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.min);
        return;
      }
      connectedInput.value = min;
    } else if (value > max) {
      connectedInput.style.backgroundSize = '100% 100%';
      target.value = formatValue(target, max);
      if (target.name === 'initial') {
        connectedInput.value = connectedInput.max;
        _consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput, _consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.max);
        return;
      }
      connectedInput.value = max;
    } else {
      target.value = formatValue(target, value);
      if (target.name === 'initial') {
        const percentValue = value / convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value) * 100;
        connectedInput.value = percentValue;
        connectedInput.style.backgroundSize = `${(connectedInput.value - connectedInput.min) * 100 / (connectedInput.max - connectedInput.min)}% 100%`;
        _consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput, percentValue);
        return;
      }
      connectedInput.style.backgroundSize = `${(value - min) * 100 / (max - min)}% 100%`;
      connectedInput.value = value;
    }
    if (target.name === 'percent') {
      _consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput, convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value) / 100 * convertToNumber(target.value));
    }
  }
}
function setAmountInputValue(value) {
  if (convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value) === null) {
    _consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput, _consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.min);
  }
  const min = Math.round(convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value) * 10 / 100);
  const max = Math.round(convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value) * 60 / 100);
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput.min = min;
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput.max = max;
  const initialAmount = Math.ceil(value / 100 * convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value));
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput.value = formatValue(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput, initialAmount);
}
function setInitialRange(input, rangeInput) {
  const min = Number(input.min);
  const max = Number(input.max);
  const value = convertToNumber(input.value);
  if (input.name === 'percent') {
    setAmountInputValue(value);
  }
  rangeInput.style.backgroundSize = `${(value - min) * 100 / (max - min)}% 100%`;
  rangeInput.value = value;
}
function countLeasing() {
  const amount = convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.value);
  const initial = convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.initialInput.value);
  const time = convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.timeInput.value);
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.resultAmount.textContent = `${formatValue(null, (amount + initial) * time)} ₽`;
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.resultMonthlyPayment.textContent = `${formatValue(null, Math.ceil((amount - initial) * (0.05 * (1 + 0.05) ** time) / (1 + 0.05) ** time - 1))} ₽`;
}
function setInitial() {
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.numberInputs.forEach(el => {
    if (typeof _consts_consts__WEBPACK_IMPORTED_MODULE_2__.defaultValues[el.name] === 'number') {
      el.value = formatValue(el, _consts_consts__WEBPACK_IMPORTED_MODULE_2__.defaultValues[el.name]);
      setInitialRange(el, findConnectedInput(el));
    }
  });
  countLeasing();
}
function handleLeasingFormSubmit() {
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingFormSubmitButton.classList.add('leasing-form__button_loading');
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingFormSubmitButton.textContent = '';
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingFormSubmitButton.disabled = true;
  const res = _consts_consts__WEBPACK_IMPORTED_MODULE_2__.allInputs.map(input => {
    const {
      name,
      value
    } = input;
    return {
      name,
      value
    };
  });
  alert(JSON.stringify(res));
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingFormSubmitButton.classList.remove('leasing-form__button_loading');
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingFormSubmitButton.textContent = 'Оставить заявку';
  _consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingFormSubmitButton.disabled = false;
}
_consts_consts__WEBPACK_IMPORTED_MODULE_2__.allInputs.forEach(input => {
  input.addEventListener('change', event => {
    handleInputChange(event);
    countLeasing();
  });
});
_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountInput.addEventListener('change', () => {
  setAmountInputValue(convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.value));
});
_consts_consts__WEBPACK_IMPORTED_MODULE_2__.amountRangeInput.addEventListener('change', () => {
  setAmountInputValue(convertToNumber(_consts_consts__WEBPACK_IMPORTED_MODULE_2__.percentInput.value));
});
_consts_consts__WEBPACK_IMPORTED_MODULE_2__.leasingForm.addEventListener('submit', event => {
  event.preventDefault();
  setTimeout(() => {
    handleLeasingFormSubmit();
  }, 0);
});
setInitial();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRUZiLHdFQUE0QixDQUFDLFFBQVEsRUFBR3lFLEtBQUssSUFBSztFQUNoREEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7RUFFdEJDLFVBQVUsQ0FBQyxNQUFNO0lBQ2ZiLHVCQUF1QixFQUFFO0VBQzNCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFFRkYsVUFBVSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2NvbnN0cy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vdGVzdC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3Rlc3QvLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rlc3QvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbGVhc2luZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhc2luZy1mb3JtJyk7XG5leHBvcnQgY29uc3QgYWxsSW5wdXRzID0gQXJyYXkuZnJvbShsZWFzaW5nRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbmV4cG9ydCBjb25zdCByYW5nZUlucHV0cyA9IEFycmF5LmZyb20obGVhc2luZ0Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJykpO1xuZXhwb3J0IGNvbnN0IG51bWJlcklucHV0cyA9IEFycmF5LmZyb20obGVhc2luZ0Zvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInRleHRcIl0nKSk7XG5cbmV4cG9ydCBjb25zdCBhbW91bnRJbnB1dCA9IGxlYXNpbmdGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJhbW91bnRcIl0nKTtcbmV4cG9ydCBjb25zdCBhbW91bnRSYW5nZUlucHV0ID0gbGVhc2luZ0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImFtb3VudFJhbmdlXCJdJyk7XG5leHBvcnQgY29uc3QgaW5pdGlhbElucHV0ID0gbGVhc2luZ0Zvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImluaXRpYWxcIl0nKTtcbmV4cG9ydCBjb25zdCBwZXJjZW50UmFuZ2VJbnB1dCA9IGxlYXNpbmdGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwZXJjZW50UmFuZ2VcIl0nKTtcbmV4cG9ydCBjb25zdCBwZXJjZW50SW5wdXQgPSBsZWFzaW5nRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGVyY2VudFwiXScpO1xuZXhwb3J0IGNvbnN0IHRpbWVJbnB1dCA9IGxlYXNpbmdGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aW1lXCJdJyk7XG5cbmV4cG9ydCBjb25zdCBsZWFzaW5nRm9ybVN1Ym1pdEJ1dHRvbiA9IGxlYXNpbmdGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5sZWFzaW5nLWZvcm1fX2J1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHJlc3VsdEFtb3VudCA9IGxlYXNpbmdGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5sZWFzaW5nLWZvcm1fX3Jlc3VsdC1hbW91bnQnKTtcbmV4cG9ydCBjb25zdCByZXN1bHRNb250aGx5UGF5bWVudCA9IGxlYXNpbmdGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5sZWFzaW5nLWZvcm1fX3Jlc3VsdC1tb250aCcpO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgYW1vdW50OiAzMzAwMDAwLFxuICBwZXJjZW50OiAxMCxcbiAgdGltZTogNjAsXG59O1xuIiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwicnVcXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+Y2FyIGxlYXNpbmc8L3RpdGxlPlxcbiAgPC9oZWFkPlxcblxcbiAgPGJvZHkgY2xhc3M9XFxcImJvZHlcXFwiPlxcbiAgICA8Zm9ybSBjbGFzcz1cXFwibGVhc2luZy1mb3JtXFxcIj5cXG4gICAgICA8aDEgY2xhc3M9XFxcImxlYXNpbmctZm9ybV9faGVhZGVyXFxcIj7QoNCw0YHRgdGH0LjRgtCw0LnRgtC1INGB0YLQvtC40LzQvtGB0YLRjCDQsNCy0YLQvtC80L7QsdC40LvRjyDQsiZuYnNwO9C70LjQt9C40L3QszwvaDE+XFxuXFxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0LXNldFxcXCI+XFxuICAgICAgICA8bGVnZW5kIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0LWhlYWRlclxcXCI+0JbQtdC70LDQtdC80LDRjyDRgdGD0LzQvNCwINC60YDQtdC00LjRgtCwPC9sZWdlbmQ+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2Zvcm0taWNvbiBsZWFzaW5nLWZvcm1fX2Zvcm0taWNvbl9ydWJcXFwiPlxcbiAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgIG1pbj1cXFwiMTUwMDAwMFxcXCJcXG4gICAgICAgICAgICBtYXg9XFxcIjEwMDAwMDAwXFxcIlxcbiAgICAgICAgICAgIG5hbWU9XFxcImFtb3VudFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19pbnB1dFxcXCJcXG4gICAgICAgICAgICBtYXhsZW5ndGg9XFxcIjEwXFxcIlxcbiAgICAgICAgICAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgdHlwZT1cXFwicmFuZ2VcXFwiXFxuICAgICAgICAgIG5hbWU9XFxcImFtb3VudFJhbmdlXFxcIlxcbiAgICAgICAgICBtaW49XFxcIjE1MDAwMDBcXFwiXFxuICAgICAgICAgIG1heD1cXFwiMTAwMDAwMDBcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0X3JhbmdlXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICA8L2ZpZWxkc2V0PlxcblxcbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19pbnB1dC1zZXRcXFwiPlxcbiAgICAgICAgPGxlZ2VuZCBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19pbnB1dC1oZWFkZXJcXFwiPtCf0LXRgNCy0L7QvdCw0YfQsNC70YzQvdGL0Lkg0LLQt9C90L7RgTwvbGVnZW5kPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImluaXRpYWxcXFwiIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0XFxcIiBtYXhsZW5ndGg9XFxcIjExXFxcIiAvPlxcbiAgICAgICAgPGlucHV0XFxuICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgIG1pbj1cXFwiMTBcXFwiXFxuICAgICAgICAgIG1heD1cXFwiNjBcXFwiXFxuICAgICAgICAgIG5hbWU9XFxcInBlcmNlbnRcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0IGxlYXNpbmctZm9ybV9faW5wdXRfcGVyY2VudFxcXCJcXG4gICAgICAgICAgbWF4bGVuZ3RoPVxcXCIzXFxcIlxcbiAgICAgICAgLz5cXG4gICAgICAgIDxpbnB1dFxcbiAgICAgICAgICB0eXBlPVxcXCJyYW5nZVxcXCJcXG4gICAgICAgICAgbmFtZT1cXFwicGVyY2VudFJhbmdlXFxcIlxcbiAgICAgICAgICBtaW49XFxcIjEwXFxcIlxcbiAgICAgICAgICBtYXg9XFxcIjYwXFxcIlxcbiAgICAgICAgICBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19pbnB1dF9yYW5nZVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgPC9maWVsZHNldD5cXG5cXG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XFxcImxlYXNpbmctZm9ybV9faW5wdXQtc2V0XFxcIj5cXG4gICAgICAgIDxsZWdlbmQgY2xhc3M9XFxcImxlYXNpbmctZm9ybV9faW5wdXQtaGVhZGVyXFxcIj7QodGA0L7QuiDQu9C40LfQuNC90LPQsDwvbGVnZW5kPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19mb3JtLWljb24gbGVhc2luZy1mb3JtX19mb3JtLWljb25fbW9udGhcXFwiPlxcbiAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgIG1pbj1cXFwiNlxcXCJcXG4gICAgICAgICAgICBtYXg9XFxcIjEyMFxcXCJcXG4gICAgICAgICAgICBuYW1lPVxcXCJ0aW1lXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0XFxcIlxcbiAgICAgICAgICAgIG1heGxlbmd0aD1cXFwiM1xcXCJcXG4gICAgICAgICAgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiBuYW1lPVxcXCJ0aW1lUmFuZ2VcXFwiIG1pbj1cXFwiNlxcXCIgbWF4PVxcXCIxMjBcXFwiIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX2lucHV0X3JhbmdlXFxcIiAvPlxcbiAgICAgIDwvZmllbGRzZXQ+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19yZXN1bHQtYmxvY2tcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19ibG9ja1xcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJsZWFzaW5nLWZvcm1fX3Jlc3VsdC1oZWFkZXJcXFwiPtCh0YPQvNC80LAg0LTQvtCz0L7QstC+0YDQsCDQu9C40LfQuNC90LPQsDwvcD5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImxlYXNpbmctZm9ybV9fcmVzdWx0LWFtb3VudCBsZWFzaW5nLWZvcm1fX3Jlc3VsdC10ZXh0XFxcIj48L3A+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImxlYXNpbmctZm9ybV9fYmxvY2tcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19yZXN1bHQtaGVhZGVyXFxcIj7QldC20LXQvNC10YHRj9GH0L3Ri9C5INC/0LvQsNGC0LXQtiDQvtGCPC9wPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19yZXN1bHQtbW9udGggbGVhc2luZy1mb3JtX19yZXN1bHQtdGV4dFxcXCI+PC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibGVhc2luZy1mb3JtX19idXR0b25cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+0J7RgdGC0LDQstC40YLRjCDQt9Cw0Y/QstC60YM8L2J1dHRvbj5cXG4gICAgPC9mb3JtPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQge1xuICByYW5nZUlucHV0cyxcbiAgbnVtYmVySW5wdXRzLFxuICBkZWZhdWx0VmFsdWVzLFxuICBhbW91bnRJbnB1dCxcbiAgaW5pdGlhbElucHV0LFxuICBwZXJjZW50UmFuZ2VJbnB1dCxcbiAgcGVyY2VudElucHV0LFxuICB0aW1lSW5wdXQsXG4gIGxlYXNpbmdGb3JtLFxuICBsZWFzaW5nRm9ybVN1Ym1pdEJ1dHRvbixcbiAgcmVzdWx0QW1vdW50LFxuICByZXN1bHRNb250aGx5UGF5bWVudCxcbiAgYWxsSW5wdXRzLFxuICBhbW91bnRSYW5nZUlucHV0LFxufSBmcm9tICcuLi9jb25zdHMvY29uc3RzJztcblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoaW5wdXQsIHZhbCkge1xuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IHZhbHVlID0gMDtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdydScpO1xuICB2YWx1ZSA9IGZvcm1hdHRlci5mb3JtYXQodmFsKTtcblxuICBpZiAoaW5wdXQgJiYgaW5wdXQubmFtZSA9PT0gJ3BlcmNlbnQnKSB7XG4gICAgdmFsdWUuc2xpY2UoMCwgMSk7XG4gICAgdmFsdWUgKz0gJyUnO1xuICB9IGVsc2UgaWYgKGlucHV0ICYmIGlucHV0Lm5hbWUgPT09ICdpbml0aWFsJykge1xuICAgIHZhbHVlICs9ICcg4oK9JztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvTnVtYmVyKHZhbCkge1xuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KHZhbC5yZXBsYWNlKC9cXHN84oK9fCUvZywgJycpLCAxMCk7XG5cbiAgaWYgKCF2YWx1ZSB8fCBOdW1iZXIuaXNOYU4odmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRDb25uZWN0ZWRJbnB1dChpbnB1dCkge1xuICBsZXQgY29ubmVjdGVkSW5wdXQ7XG5cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYW5nZScpIHtcbiAgICBjb25uZWN0ZWRJbnB1dCA9IG51bWJlcklucHV0cy5maW5kKChlbCkgPT4gaW5wdXQubmFtZS5pbmNsdWRlcyhlbC5uYW1lKSk7XG4gIH0gZWxzZSBpZiAoaW5wdXQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgY29ubmVjdGVkSW5wdXQgPSByYW5nZUlucHV0cy5maW5kKChlbCkgPT4gZWwubmFtZS5pbmNsdWRlcyhpbnB1dC5uYW1lKSk7XG4gIH1cblxuICByZXR1cm4gY29ubmVjdGVkSW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgY29uc3QgbWluID0gTnVtYmVyKHRhcmdldC5taW4pO1xuICBjb25zdCBtYXggPSBOdW1iZXIodGFyZ2V0Lm1heCk7XG4gIGNvbnN0IHZhbHVlID0gY29udmVydFRvTnVtYmVyKHRhcmdldC52YWx1ZSk7XG4gIGxldCBjb25uZWN0ZWRJbnB1dCA9IGZpbmRDb25uZWN0ZWRJbnB1dCh0YXJnZXQpO1xuXG4gIGlmICh0YXJnZXQubmFtZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgY29ubmVjdGVkSW5wdXQgPSBwZXJjZW50UmFuZ2VJbnB1dDtcbiAgfVxuXG4gIGlmICh0YXJnZXQudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgIGlmICh0YXJnZXQubmFtZSA9PT0gJ3BlcmNlbnRSYW5nZScpIHtcbiAgICAgIGNvbnN0IGluaXRpYWxBbW91bnQgPSBNYXRoLmNlaWwodmFsdWUgKiAwLjAxICogY29udmVydFRvTnVtYmVyKGFtb3VudElucHV0LnZhbHVlKSk7XG4gICAgICBpbml0aWFsSW5wdXQudmFsdWUgPSBmb3JtYXRWYWx1ZShpbml0aWFsSW5wdXQsIGluaXRpYWxBbW91bnQpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZElucHV0LnZhbHVlID0gZm9ybWF0VmFsdWUoY29ubmVjdGVkSW5wdXQsIHZhbHVlKTtcbiAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBgJHsoKHZhbHVlIC0gbWluKSAqIDEwMCkgLyAobWF4IC0gbWluKX0lIDEwMCVgO1xuICB9IGVsc2UgaWYgKHRhcmdldC50eXBlID09PSAndGV4dCcpIHtcbiAgICBpZiAodmFsdWUgPCBtaW4gfHwgdHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgY29ubmVjdGVkSW5wdXQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnMSUgMSUnO1xuICAgICAgdGFyZ2V0LnZhbHVlID0gZm9ybWF0VmFsdWUodGFyZ2V0LCBtaW4pO1xuXG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT09ICdpbml0aWFsJykge1xuICAgICAgICBjb25uZWN0ZWRJbnB1dC52YWx1ZSA9IGNvbm5lY3RlZElucHV0Lm1pbjtcbiAgICAgICAgcGVyY2VudElucHV0LnZhbHVlID0gZm9ybWF0VmFsdWUocGVyY2VudElucHV0LCBwZXJjZW50SW5wdXQubWluKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbm5lY3RlZElucHV0LnZhbHVlID0gbWluO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgIGNvbm5lY3RlZElucHV0LnN0eWxlLmJhY2tncm91bmRTaXplID0gJzEwMCUgMTAwJSc7XG4gICAgICB0YXJnZXQudmFsdWUgPSBmb3JtYXRWYWx1ZSh0YXJnZXQsIG1heCk7XG5cbiAgICAgIGlmICh0YXJnZXQubmFtZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAgIGNvbm5lY3RlZElucHV0LnZhbHVlID0gY29ubmVjdGVkSW5wdXQubWF4O1xuICAgICAgICBwZXJjZW50SW5wdXQudmFsdWUgPSBmb3JtYXRWYWx1ZShwZXJjZW50SW5wdXQsIHBlcmNlbnRJbnB1dC5tYXgpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29ubmVjdGVkSW5wdXQudmFsdWUgPSBtYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC52YWx1ZSA9IGZvcm1hdFZhbHVlKHRhcmdldCwgdmFsdWUpO1xuXG4gICAgICBpZiAodGFyZ2V0Lm5hbWUgPT09ICdpbml0aWFsJykge1xuICAgICAgICBjb25zdCBwZXJjZW50VmFsdWUgPSAodmFsdWUgLyBjb252ZXJ0VG9OdW1iZXIoYW1vdW50SW5wdXQudmFsdWUpKSAqIDEwMDtcblxuICAgICAgICBjb25uZWN0ZWRJbnB1dC52YWx1ZSA9IHBlcmNlbnRWYWx1ZTtcbiAgICAgICAgY29ubmVjdGVkSW5wdXQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBgJHtcbiAgICAgICAgICAoKGNvbm5lY3RlZElucHV0LnZhbHVlIC0gY29ubmVjdGVkSW5wdXQubWluKSAqIDEwMCkgL1xuICAgICAgICAgIChjb25uZWN0ZWRJbnB1dC5tYXggLSBjb25uZWN0ZWRJbnB1dC5taW4pXG4gICAgICAgIH0lIDEwMCVgO1xuICAgICAgICBwZXJjZW50SW5wdXQudmFsdWUgPSBmb3JtYXRWYWx1ZShwZXJjZW50SW5wdXQsIHBlcmNlbnRWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25uZWN0ZWRJbnB1dC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGAkeygodmFsdWUgLSBtaW4pICogMTAwKSAvIChtYXggLSBtaW4pfSUgMTAwJWA7XG4gICAgICBjb25uZWN0ZWRJbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQubmFtZSA9PT0gJ3BlcmNlbnQnKSB7XG4gICAgICBpbml0aWFsSW5wdXQudmFsdWUgPSBmb3JtYXRWYWx1ZShcbiAgICAgICAgaW5pdGlhbElucHV0LFxuICAgICAgICAoY29udmVydFRvTnVtYmVyKGFtb3VudElucHV0LnZhbHVlKSAvIDEwMCkgKiBjb252ZXJ0VG9OdW1iZXIodGFyZ2V0LnZhbHVlKSxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEFtb3VudElucHV0VmFsdWUodmFsdWUpIHtcbiAgaWYgKGNvbnZlcnRUb051bWJlcihhbW91bnRJbnB1dC52YWx1ZSkgPT09IG51bGwpIHtcbiAgICBhbW91bnRJbnB1dC52YWx1ZSA9IGZvcm1hdFZhbHVlKGFtb3VudElucHV0LCBhbW91bnRJbnB1dC5taW4pO1xuICB9XG5cbiAgY29uc3QgbWluID0gTWF0aC5yb3VuZCgoY29udmVydFRvTnVtYmVyKGFtb3VudElucHV0LnZhbHVlKSAqIDEwKSAvIDEwMCk7XG4gIGNvbnN0IG1heCA9IE1hdGgucm91bmQoKGNvbnZlcnRUb051bWJlcihhbW91bnRJbnB1dC52YWx1ZSkgKiA2MCkgLyAxMDApO1xuXG4gIGluaXRpYWxJbnB1dC5taW4gPSBtaW47XG4gIGluaXRpYWxJbnB1dC5tYXggPSBtYXg7XG5cbiAgY29uc3QgaW5pdGlhbEFtb3VudCA9IE1hdGguY2VpbCgodmFsdWUgLyAxMDApICogY29udmVydFRvTnVtYmVyKGFtb3VudElucHV0LnZhbHVlKSk7XG4gIGluaXRpYWxJbnB1dC52YWx1ZSA9IGZvcm1hdFZhbHVlKGluaXRpYWxJbnB1dCwgaW5pdGlhbEFtb3VudCk7XG59XG5cbmZ1bmN0aW9uIHNldEluaXRpYWxSYW5nZShpbnB1dCwgcmFuZ2VJbnB1dCkge1xuICBjb25zdCBtaW4gPSBOdW1iZXIoaW5wdXQubWluKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGlucHV0Lm1heCk7XG4gIGNvbnN0IHZhbHVlID0gY29udmVydFRvTnVtYmVyKGlucHV0LnZhbHVlKTtcblxuICBpZiAoaW5wdXQubmFtZSA9PT0gJ3BlcmNlbnQnKSB7XG4gICAgc2V0QW1vdW50SW5wdXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByYW5nZUlucHV0LnN0eWxlLmJhY2tncm91bmRTaXplID0gYCR7KCh2YWx1ZSAtIG1pbikgKiAxMDApIC8gKG1heCAtIG1pbil9JSAxMDAlYDtcbiAgcmFuZ2VJbnB1dC52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjb3VudExlYXNpbmcoKSB7XG4gIGNvbnN0IGFtb3VudCA9IGNvbnZlcnRUb051bWJlcihhbW91bnRJbnB1dC52YWx1ZSk7XG4gIGNvbnN0IGluaXRpYWwgPSBjb252ZXJ0VG9OdW1iZXIoaW5pdGlhbElucHV0LnZhbHVlKTtcbiAgY29uc3QgdGltZSA9IGNvbnZlcnRUb051bWJlcih0aW1lSW5wdXQudmFsdWUpO1xuXG4gIHJlc3VsdEFtb3VudC50ZXh0Q29udGVudCA9IGAke2Zvcm1hdFZhbHVlKG51bGwsIChhbW91bnQgKyBpbml0aWFsKSAqIHRpbWUpfSDigr1gO1xuXG4gIHJlc3VsdE1vbnRobHlQYXltZW50LnRleHRDb250ZW50ID0gYCR7Zm9ybWF0VmFsdWUoXG4gICAgbnVsbCxcbiAgICBNYXRoLmNlaWwoKChhbW91bnQgLSBpbml0aWFsKSAqICgwLjA1ICogKDEgKyAwLjA1KSAqKiB0aW1lKSkgLyAoMSArIDAuMDUpICoqIHRpbWUgLSAxKSxcbiAgKX0g4oK9YDtcbn1cblxuZnVuY3Rpb24gc2V0SW5pdGlhbCgpIHtcbiAgbnVtYmVySW5wdXRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkZWZhdWx0VmFsdWVzW2VsLm5hbWVdID09PSAnbnVtYmVyJykge1xuICAgICAgZWwudmFsdWUgPSBmb3JtYXRWYWx1ZShlbCwgZGVmYXVsdFZhbHVlc1tlbC5uYW1lXSk7XG4gICAgICBzZXRJbml0aWFsUmFuZ2UoZWwsIGZpbmRDb25uZWN0ZWRJbnB1dChlbCkpO1xuICAgIH1cbiAgfSk7XG4gIGNvdW50TGVhc2luZygpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVMZWFzaW5nRm9ybVN1Ym1pdCgpIHtcbiAgbGVhc2luZ0Zvcm1TdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbGVhc2luZy1mb3JtX19idXR0b25fbG9hZGluZycpO1xuICBsZWFzaW5nRm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcnO1xuICBsZWFzaW5nRm9ybVN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgY29uc3QgcmVzID0gYWxsSW5wdXRzLm1hcCgoaW5wdXQpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBpbnB1dDtcbiAgICByZXR1cm4geyBuYW1lLCB2YWx1ZSB9O1xuICB9KTtcblxuICBhbGVydChKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICBsZWFzaW5nRm9ybVN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsZWFzaW5nLWZvcm1fX2J1dHRvbl9sb2FkaW5nJyk7XG4gIGxlYXNpbmdGb3JtU3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ9Ce0YHRgtCw0LLQuNGC0Ywg0LfQsNGP0LLQutGDJztcbiAgbGVhc2luZ0Zvcm1TdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuYWxsSW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KTtcbiAgICBjb3VudExlYXNpbmcoKTtcbiAgfSk7XG59KTtcblxuYW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBzZXRBbW91bnRJbnB1dFZhbHVlKGNvbnZlcnRUb051bWJlcihwZXJjZW50SW5wdXQudmFsdWUpKTtcbn0pO1xuXG5hbW91bnRSYW5nZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgc2V0QW1vdW50SW5wdXRWYWx1ZShjb252ZXJ0VG9OdW1iZXIocGVyY2VudElucHV0LnZhbHVlKSk7XG59KTtcblxubGVhc2luZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGFuZGxlTGVhc2luZ0Zvcm1TdWJtaXQoKTtcbiAgfSwgMCk7XG59KTtcblxuc2V0SW5pdGlhbCgpO1xuIl0sIm5hbWVzIjpbImxlYXNpbmdGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWxsSW5wdXRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInJhbmdlSW5wdXRzIiwibnVtYmVySW5wdXRzIiwiYW1vdW50SW5wdXQiLCJhbW91bnRSYW5nZUlucHV0IiwiaW5pdGlhbElucHV0IiwicGVyY2VudFJhbmdlSW5wdXQiLCJwZXJjZW50SW5wdXQiLCJ0aW1lSW5wdXQiLCJsZWFzaW5nRm9ybVN1Ym1pdEJ1dHRvbiIsInJlc3VsdEFtb3VudCIsInJlc3VsdE1vbnRobHlQYXltZW50IiwiZGVmYXVsdFZhbHVlcyIsImFtb3VudCIsInBlcmNlbnQiLCJ0aW1lIiwiZm9ybWF0VmFsdWUiLCJpbnB1dCIsInZhbCIsInZhbHVlIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsIm5hbWUiLCJzbGljZSIsImNvbnZlcnRUb051bWJlciIsInBhcnNlSW50IiwicmVwbGFjZSIsIk51bWJlciIsImlzTmFOIiwiZmluZENvbm5lY3RlZElucHV0IiwiY29ubmVjdGVkSW5wdXQiLCJ0eXBlIiwiZmluZCIsImVsIiwiaW5jbHVkZXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsIm1pbiIsIm1heCIsImluaXRpYWxBbW91bnQiLCJNYXRoIiwiY2VpbCIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJwZXJjZW50VmFsdWUiLCJzZXRBbW91bnRJbnB1dFZhbHVlIiwicm91bmQiLCJzZXRJbml0aWFsUmFuZ2UiLCJyYW5nZUlucHV0IiwiY291bnRMZWFzaW5nIiwiaW5pdGlhbCIsInRleHRDb250ZW50Iiwic2V0SW5pdGlhbCIsImZvckVhY2giLCJoYW5kbGVMZWFzaW5nRm9ybVN1Ym1pdCIsImNsYXNzTGlzdCIsImFkZCIsImRpc2FibGVkIiwicmVzIiwibWFwIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==