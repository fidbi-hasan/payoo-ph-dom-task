/* Add money functionalities */

document.getElementById('confirmAddMoney').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');

  const selectedBank = getSelectFieldValueById('bankOptions');
  const accountNumber = getInputFieldValueById('accountNumberAddMoney')
  const addAmount = getInputFieldValueById('addAmount');
  const pinAddMoney = getInputFieldValueById('pin-addMoney'); 
  
  if(isNaN(addAmount)) {
    alert('Not a valid amount!');
    return;
  }

  if (pinAddMoney === 1234) {
    const updatedAmount = currentAmount + addAmount;
    
    document.getElementById('currentAmount').innerText = updatedAmount;

    // add to transaction
    const newRecord = document.createElement('div');
    newRecord.innerHTML = `Add Money -> <strong>Bank:</strong> ${selectedBank} | <strong>Amout:</strong> ${addAmount} | <strong>Account No.:</strong> ${accountNumber}`;
    document.getElementById('option-transactions').appendChild(newRecord);

  } else {
    alert('Pin did not match!');
  }
});