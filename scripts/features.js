// logout
document.getElementById('logout-button').addEventListener('click', () => {
  window.location.href = 'index.html';
});

showDefaultOption();

// toggle options
document.getElementById('btnAddMoney').addEventListener('click', () => {
  showAnOptionById('option-add-money');
});

document.getElementById('btnCashout').addEventListener('click', () => {
  showAnOptionById('option-cashout');
});

document.getElementById('btnTransferMoney').addEventListener('click', () => {
  showAnOptionById('option-transferMoney');
});

document.getElementById('btnGetBonus').addEventListener('click', () => {
  showAnOptionById('option-getBonus');
});

document.getElementById('btnPayBill').addEventListener('click', () => {
  showAnOptionById('option-payBill');
});

document.getElementById('btnTransaction').addEventListener('click', () => {
  showAnOptionById('option-transactions');
});