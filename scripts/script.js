'use strict';

const containerLogin = document.querySelector('.container');
const btnLogin = document.querySelector('.btn-login');
const btnContainerclose = document.querySelector('.btn-close');
const btnSubmit = document.querySelector('.btn-submit');

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

btnContainerclose.addEventListener('click', () => {
  closeLoginPage();
  btnLogin.style.opacity = 100;
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !containerLogin.classList.contains('hidden')) {
    closeLoginPage();
  }
});

btnSubmit.addEventListener('click', () => {
  btnSubmit.style.opacity = 0;
  closeLoginPage();
  btnLogin.style.opacity = 100;
});
