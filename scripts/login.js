const form = document.getElementById('login-form');
const fieldset = document.getElementById('fieldset');
const phone = document.getElementById('phone');
const pass = document.getElementById('password');

const btnOneclickCredentials = document.getElementById('credentialsOneClick');

document.getElementById('buttonLogin').addEventListener('click', (e) => {
  e.preventDefault();

  if (phone.value === '01389026746' && pass.value === '0x00x000x0000x') {
    window.location.href = 'home.html';

  } else {
    const getErrorMsg = document.getElementById('errorMsg');

    if (!getErrorMsg) {
      const errorMsg = document.createElement('p');
      errorMsg.setAttribute('id', 'errorMsg');
      errorMsg.innerText = 'Invalid credentials!';
      errorMsg.style.color = 'red';
      errorMsg.style.fontSize = '12px';
      errorMsg.style.margin = '-12px 0';

      fieldset.appendChild(errorMsg);
    }

    phone.value = '';
    pass.value = ''
  }
});

btnOneclickCredentials.addEventListener('click', () => {
  console.log('btnOneclickCredentials clicked');
  
  phone.value = '01389026746';
  pass.value = '0x00x000x0000x'
});