document.getElementById('confirmCashout').addEventListener('click', (e) => {
  e.preventDefault();
  const cashoutAmount = document.getElementById('cashoutAmount');
  const currentAmount = document.getElementById('currentAmount');
  const pinCashout = document.getElementById('pinCashout');

  if (pinCashout.value === '1234') {
    currentAmount.innerText = parseInt(currentAmount.innerText) - parseInt(cashoutAmount.value);
  } else {
    alert('Pin did not match!');
  }
  cashoutAmount.value = '';
  pinCashout.value = '';
});