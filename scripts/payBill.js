/* Pay Bill functionalities */

document.getElementById('confirmPayment').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');

  const selectedBill = getSelectFieldValueById('billOptions');
  const billerAccountNumber = getInputFieldValueById('billerAccountNumber');
  const billAmount = getInputFieldValueById('billAmount');
  const pinPayBill = getInputFieldValueById('pinPayBill'); 
  
  if(isNaN(billAmount)) {
    alert('Not a valid amount!');
    return;
  }

  if (pinPayBill === 1234) {
    if (billAmount > currentAmount) {
      alert('Not enough balance to pay the bill!');
      return;
    }

    const updatedAmount = currentAmount - billAmount;
    
    document.getElementById('currentAmount').innerText = updatedAmount;

    // add to transaction
    const newRecord = document.createElement('div');
    newRecord.innerHTML = `Pay Bill -> <strong>Bill Type:</strong> ${selectedBill} | <strong>Amout:</strong> ${billAmount} | <strong>Account No.:</strong> ${billerAccountNumber}`;
    document.getElementById('option-transactions').appendChild(newRecord);

  } else {
    alert('Pin did not match!');
  }
});