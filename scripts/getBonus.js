/* get bonus functionalities */

// enter coupon code - extra
document.getElementById('couponCodeContainer').addEventListener('click', () => {
  const couponCode = document.getElementById('couponCode').innerText;
  
  document.getElementById('bonusCoupon').value = couponCode;
});

document.getElementById('confirmBonus').addEventListener('click', (e) => {
  e.preventDefault();

  const currentAmount = getTextFieldValueById('currentAmount');

  const bonusCoupon = document.getElementById('bonusCoupon').value;

  if (bonusCoupon === 'FH25') {
    const bonusAmount = currentAmount * (25 / 100);
    const updatedAmount = currentAmount + bonusAmount;

    document.getElementById('currentAmount').innerText = updatedAmount;

    // add to transaction
    const newRecord = document.createElement('div');
    newRecord.innerHTML = `Bonus -> <strong>Amout:</strong> ${bonusAmount}`;
    document.getElementById('option-transactions').appendChild(newRecord);
    
  } else {
    alert('coupon is not valid!');
  } 

});