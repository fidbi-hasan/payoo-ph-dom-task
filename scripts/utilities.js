// functions for reuse

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const convertedInputValue = parseFloat(inputValue);

  return convertedInputValue;
}

function getTextFieldValueById(id) {
  const inputValue = document.getElementById(id).innerText;
  const convertedInputValue = parseFloat(inputValue);

  return convertedInputValue;
}

function getSelectFieldValueById(id) {
  const selectElement = document.getElementById(id);
  const selectedValue = selectElement.value;

  return selectedValue;
}

function showDefaultOption() {
  document.getElementById('option-cashout').style.display = 'none';
  document.getElementById('option-transferMoney').style.display = 'none';
  document.getElementById('option-getBonus').style.display = 'none';
  document.getElementById('option-payBill').style.display = 'none';
  document.getElementById('option-transactions').style.display = 'none';
}

function showAnOptionById(id) {
  document.getElementById('option-add-money').style.display = 'none';
  document.getElementById('option-cashout').style.display = 'none';
  document.getElementById('option-transferMoney').style.display = 'none';
  document.getElementById('option-getBonus').style.display = 'none';
  document.getElementById('option-payBill').style.display = 'none';
  document.getElementById('option-transactions').style.display = 'none';

  document.getElementById(id).style.display = 'block';
}