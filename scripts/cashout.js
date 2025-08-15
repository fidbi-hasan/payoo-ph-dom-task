/* Cashout functionalities */

document.getElementById('confirmCashout').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');
  const cashoutAmount = getInputFieldValueById('cashoutAmount');
  const pinCashout = getInputFieldValueById('pinCashout');

  if (pinCashout === 1234) {
    const updatedAmount = currentAmount - cashoutAmount;
    
    document.getElementById('currentAmount').innerText = updatedAmount;

  } else {
    alert('Pin did not match!');
  }
});