/* Add money functionalities */

document.getElementById('confirmAddMoney').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = document.getElementById('currentAmount');
  // const addAmount = document.getElementById('addAmount');
  const addAmount = getInputFieldValueById('addAmount');
  const pinAddMoney = getInputFieldValueById('pin-addMoney');  

  if (pinAddMoney === 1234) {
    currentAmount.innerText = addAmount + parseInt(currentAmount.innerText);
  } else {
    alert('Pin did not match!');
  }
  // addAmount = '';
  // pinAddMoney = '';
});