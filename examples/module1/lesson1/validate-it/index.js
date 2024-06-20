const ERROR_MESSAGE = 'Invalid';
const SUCCESS_MESSAGE = 'Valid';

const minAmountValidator = (minValue) => (value) => value > minValue;
const maxAmountValidator = (maxValue) => (value) => value < maxValue;
const moduloValidator = (moduloValue, equals) => (value) =>
  value % moduloValue == equals;

const validateInput = (inputValue, ...validators) => {
  if (inputValue === '') {
    return ERROR_MESSAGE;
  }

  const value = Number(inputValue);

  if (!Number.isInteger(value)) {
    return ERROR_MESSAGE;
  }

  if (validators.some((validator) => validator(value) === false)) {
    return ERROR_MESSAGE;
  }

  return SUCCESS_MESSAGE;
};

const getElements = () => {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  return { input, button, button2, result };
};

const handleClear = (input, result) => {
  input.value = '';
  result.innerHTML = '';
};

const handleValidate = (input, result) => {
  result.innerHTML = validateInput(
    input.value,
    minAmountValidator(0),
    maxAmountValidator(100),
    moduloValidator(2, 0)
  );
};

function validator() {
  const { input, button, button2, result } = getElements();

  button.addEventListener('click', () => handleValidate(input, result));
  button2.addEventListener('click', () => handleClear(input, result));
}

validator();
