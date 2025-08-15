/* Add money functionalities */

document.getElementById('confirmAddMoney').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');
  const addAmount = getInputFieldValueById('addAmount');
  const pinAddMoney = getInputFieldValueById('pin-addMoney');  

  if (pinAddMoney === 1234) {
    const updatedAmount = currentAmount + addAmount;
    
    document.getElementById('currentAmount').innerText = updatedAmount;
    
  } else {
    alert('Pin did not match!');
  }
});