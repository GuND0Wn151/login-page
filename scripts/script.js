'use strict';
//Buttons
const containerLogin = document.querySelector('.container');
const btnLogin = document.querySelector('.btn-login');
const btnContainerClose = document.querySelector('.btn-close');
const btnSubmit = document.querySelector('.btn-submit');

//Messages
const labelMessage = document.querySelector('.lebal-message');

//Inputs
const inputName = document.querySelector('.input__name');
const inputPassword = document.querySelector('.input__password');

// Play Audio Function
const playAudio = function(audioPath){
new Audio(`${audioPath}`).play();
}

const openLoginPage = () => {
  containerLogin.classList.remove('hidden');
};
const closeLoginPage = () => {
  containerLogin.classList.add('hidden');
};

btnLogin.addEventListener('click', () => {
  openLoginPage();
  btnLogin.style.opacity = 0;
});

btnContainerClose.addEventListener('click', () => {
  closeLoginPage();
  btnLogin.style.opacity = 100;
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !containerLogin.classList.contains('hidden')) {
    closeLoginPage();
    btnLogin.style.opacity = 100;
  }
});

btnSubmit.addEventListener('click', () => {
  const name = inputName.value;
  const password = inputPassword.value;

  if (name && password) {
    playAudio('sounds/login-successfully.mp3')
    btnLogin.style.fontSize = '2rem';
    btnLogin.textContent = `Welcome: ${name}`;
    btnLogin.style.opacity = 100;
    btnLogin.style.color = 'Green';
    inputName.value = inputPassword.value = '';
    closeLoginPage();
    //////////////////////////////////
  } else {
    playAudio('sounds/login-denied.mp3')
    labelMessage.textContent = 'Invalid Name & Password';
    labelMessage.style.color = 'red';
  }
});
