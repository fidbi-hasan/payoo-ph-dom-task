
document.getElementById('confirmTransfer').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');

  const transferAccountNo = getInputFieldValueById('accountNumberTransferMoney');
  const transferAmount = getInputFieldValueById('transferAmount');
  const pinTransferMoney = getInputFieldValueById('pinTransferMoney');

  if(isNaN(transferAmount)) {
    alert('Not a valid amount!');
    return;
  }

  if (pinTransferMoney === 1234) {
    if (transferAmount > currentAmount) {
      alert('Not enough balance to transfer!');
      return;
    }
    
    const updatedAmount = currentAmount - transferAmount;
    
    document.getElementById('currentAmount').innerText = updatedAmount;

    // add to transaction
    const newRecord = document.createElement('div');
    newRecord.innerHTML = `Balance Transfer -> <strong>Amout:</strong> ${transferAmount} | <strong>Account No.:</strong> ${transferAccountNo}`;
    document.getElementById('option-transactions').appendChild(newRecord);

  } else {
    alert('Pin did not match!');
  }

});