'use strict';
//Select Elements
const containerLogin = document.querySelector('.container');
const btnLogin = document.querySelector('.btn-login');
const btnContainerClose = document.querySelector('.btn-close');
const btnSubmit = document.querySelector('.btn-submit');
const iconLogin = document.querySelector('.material-symbols-outlined');

//Messages
const labelMessage = document.querySelector('.lebal-message');

//Inputs
const inputName = document.querySelector('.input__name');
const inputPassword = document.querySelector('.input__password');

//body
const body = document.querySelector('body');

// Play Audio Function
const playAudio = function (audioPath) {
  new Audio(`${audioPath}`).play();
};

const openLoginPage = () => {
  containerLogin.classList.remove('hidden');
};
const closeLoginPage = () => {
  containerLogin.classList.add('hidden');
};

btnLogin.addEventListener('click', () => {
  openLoginPage();
  btnLogin.style.opacity = 0;
  iconLogin.style.opacity = 0;
});

btnContainerClose.addEventListener('click', () => {
  closeLoginPage();
  btnLogin.style.opacity = 100;
  iconLogin.style.opacity = 100;
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
  inputName.value = inputPassword.value = '';
  const randomNumber = Math.trunc(Math.random() * 10) + 1;

  let timer = randomNumber;

  body.style.cursor = 'wait';

  setInterval(() => {
    timer--;
    console.log(timer);

    if (timer === 0) {
      body.style.cursor = 'text';

      if (name && password) {
        playAudio('sounds/login-successfully.mp3');
        btnLogin.style.fontSize = '2rem';
        btnLogin.textContent = `Welcome: ${name}`;
        btnLogin.style.opacity = 100;
        closeLoginPage();
      } else {
        playAudio('sounds/login-denied.mp3');
        labelMessage.textContent = 'Invalid Name & Password';
        labelMessage.style.color = 'red';
      }
    }
  }, 1000);
});
