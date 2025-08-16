/* Cashout functionalities */

document.getElementById('confirmCashout').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');

  const accountNumber = getInputFieldValueById('agentNumber')
  const cashoutAmount = getInputFieldValueById('cashoutAmount');
  const pinCashout = getInputFieldValueById('pinCashout');

  if(isNaN(cashoutAmount)) {
    alert('Not a valid amount!');
    return;
  }

  if (pinCashout === 1234) {
    if (cashoutAmount > currentAmount) {
      alert('Not enough balance!');
      return;
    }
    
    const updatedAmount = currentAmount - cashoutAmount;
    
    document.getElementById('currentAmount').innerText = updatedAmount;

    // add to transaction
    const newRecord = document.createElement('div');
    newRecord.innerHTML = `Cashout -> <strong>Amout:</strong> ${cashoutAmount} | <strong>Account No.:</strong> ${accountNumber}`;
    document.getElementById('option-transactions').appendChild(newRecord);

  } else {
    alert('Pin did not match!');
  }
});