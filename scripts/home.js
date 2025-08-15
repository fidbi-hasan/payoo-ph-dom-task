const logoutButton = document.getElementById('logout-button');

const addMoneyButton = document.getElementById('btnAddMoney');
const cashoutButton = document.getElementById('btnCashout');
const transferMoneyButton = document.getElementById('btnTransferMoney');
const getBonusButton = document.getElementById('btnGetBonus');
const payBillButton = document.getElementById('btnPayBill');
const transactionButton = document.getElementById('btnTransaction');

const addMoneyOption = document.getElementById('option-add-money');
const cashoutOption = document.getElementById('option-cashout');
const transferMoneyOption = document.getElementById('option-transferMoney');
const getBonusOption = document.getElementById('option-getBonus');
const payBillOption = document.getElementById('option-payBill');
const transactionOption = document.getElementById('option-transactions');

cashoutOption.style.display = 'none';
transferMoneyOption.style.display = 'none';
getBonusOption.style.display = 'none';
payBillOption.style.display = 'none';
transactionOption.style.display = 'none';

logoutButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// toggle - add money
addMoneyButton.addEventListener('click', () => {
  addMoneyOption.style.display = 'block';

  cashoutOption.style.display = 'none';
  transferMoneyOption.style.display = 'none';
  getBonusOption.style.display = 'none';
  payBillOption.style.display = 'none';
  transactionOption.style.display = 'none';
});


// toggle - cashout
cashoutButton.addEventListener('click', () => {
  cashoutOption.style.display = 'block';

  addMoneyOption.style.display = 'none';
  transferMoneyOption.style.display = 'none';
  getBonusOption.style.display = 'none';
  payBillOption.style.display = 'none';
  transactionOption.style.display = 'none';
});

transferMoneyButton.addEventListener('click', () => {
  transferMoneyOption.style.display = 'block';

  addMoneyOption.style.display = 'none';
  cashoutOption.style.display = 'none';
  getBonusOption.style.display = 'none';
  payBillOption.style.display = 'none';
  transactionOption.style.display = 'none';
});

getBonusButton.addEventListener('click', () => {
  getBonusOption.style.display = 'block';

  addMoneyOption.style.display = 'none';
  cashoutOption.style.display = 'none';
  transferMoneyOption.style.display = 'none';
  payBillOption.style.display = 'none';
  transactionOption.style.display = 'none';
});

payBillButton.addEventListener('click', () => {
  payBillOption.style.display = 'block';

  addMoneyOption.style.display = 'none';
  cashoutOption.style.display = 'none';
  transferMoneyOption.style.display = 'none';
  getBonusOption.style.display = 'none';
  transactionOption.style.display = 'none';
});

transactionButton.addEventListener('click', () => {
  transactionOption.style.display = 'block';

  addMoneyOption.style.display = 'none';
  cashoutOption.style.display = 'none';
  transferMoneyOption.style.display = 'none';
  getBonusOption.style.display = 'none';
  payBillOption.style.display = 'none';
});