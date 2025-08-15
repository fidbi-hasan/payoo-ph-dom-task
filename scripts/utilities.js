// 

console.log('utilities file added');

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const convertedInputValue = parseFloat(inputValue);

  return convertedInputValue;
}