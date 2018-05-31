var linkSearch = document.querySelector('.search');
var popupSearch = document.querySelector('.search-form');
var overlaySearch = document.querySelector('.overlay-search');
var userSearch = popupSearch.querySelector('[name=search]');
var closeSearch = document.querySelector('.overlay-search');

  linkSearch.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupSearch.classList.add('modal-show');
    overlaySearch.classList.add('modal-show');
    userSearch.focus();
    popupLogin.classList.remove('modal-show');
    overlayLogin.classList.remove('modal-show');
    popupOrder.classList.remove('modal-show-block');
    overlayOrder.classList.remove('modal-show');
  });

closeSearch.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupSearch.classList.remove('modal-show');
    overlaySearch.classList.remove('modal-show');
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupSearch.classList.contains('modal-show')) {
        popupSearch.classList.remove('modal-show');
        overlaySearch.classList.remove('modal-show');
      }
    }
  });

var linkUser = document.querySelector('.login-user');
var popupLogin = document.querySelector('.login-form');
var overlayLogin = document.querySelector('.overlay-login-form');
var closeLogin = document.querySelector('.overlay-login-form');
var userEmail = popupLogin.querySelector('[name=email]');
var userPassword = popupLogin.querySelector('[name=password]');
var form = document.querySelector('.login-form');
var isStorageSupport = true;
var storage = "";
try {
    storage = localStorage.getItem('userEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  linkUser.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupLogin.classList.add('modal-show');
    overlayLogin.classList.add('modal-show');
    if (storage) {
    userEmail.value = storage;
    userPassword.focus();
  } else {
  	userEmail.focus();
  }
    popupSearch.classList.remove('modal-show');
    overlaySearch.classList.remove('modal-show');
    popupOrder.classList.remove('modal-show-block');
    overlayOrder.classList.remove('modal-show');
  });

closeLogin.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupLogin.classList.remove('modal-show');
    overlayLogin.classList.remove('modal-show');
    popupLogin.classList.remove('modal-error');
  });

form.addEventListener('submit', function (evt) {
    if (!userEmail.value || !userPassword.value) {
      evt.preventDefault();
      popupLogin.classList.remove('modal-error');
      popupLogin.offsetWidth = popupLogin.offsetWidth;
      popupLogin.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userEmail', userEmail.value);
      }
    }
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupLogin.classList.contains('modal-show')) {
        popupLogin.classList.remove('modal-show');
        overlayLogin.classList.remove('modal-show');        
      }
    }
  });


var linkOrder = document.querySelector('.order-user');
var popupOrder = document.querySelector('.order-popup');
var overlayOrder = document.querySelector('.overlay-order');
var closeOrder = document.querySelector('.overlay-order');

linkOrder.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOrder.classList.add('modal-show-block');
    overlayOrder.classList.add('modal-show');
    popupSearch.classList.remove('modal-show');
    overlaySearch.classList.remove('modal-show');
    popupLogin.classList.remove('modal-show');
    overlayLogin.classList.remove('modal-show');
  });

closeOrder.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupOrder.classList.remove('modal-show-block');
    overlayOrder.classList.remove('modal-show');
  });

form.addEventListener('submit', function (evt) {
    if (!userEmail.value || !userPassword.value) {
      evt.preventDefault();
      popupLogin.classList.remove('modal-error');
      popupLogin.offsetWidth = popupLogin.offsetWidth;
      popupLogin.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('userEmail', userEmail.value);
        localStorage.setItem('userPassword', userPassword.value);
      }
    }
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupOrder.classList.contains('modal-show-block')) {
        popupOrder.classList.remove('modal-show-block');
    overlayOrder.classList.remove('modal-show');
      }
    }
  });