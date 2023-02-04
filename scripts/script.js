'use strict';
const btnSubmit = document.querySelector('.btn');
const modal = document.querySelector('.container');
const loginUI = document.querySelector('.login');
const closelogin = document.querySelector('.close-login');

const openLoginPage = function () {
  modal.classList.remove('hidden');
};
const closeLoginPage = function () {
  modal.classList.add('hidden');
};

loginUI.addEventListener('click', openLoginPage);

closelogin.addEventListener('click', closeLoginPage);

const darkTheme = document
  .querySelector('.dark-theme')
  .addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'black';
  });
const lightTheme = document
  .querySelector('.light-theme')
  .addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'white';
  });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeLoginPage();
  }
});
