var linkSearch = document.querySelector('.search');
var popupSearch = document.querySelector('.search-form');
var overlaySearch = document.querySelector('.overlay-search');
var userSearch = popupSearch.querySelector('[name=search]');
var closeSearch = document.querySelector('.overlay-search');

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
    storageWriteus = localStorage.getItem('userEmailWriteus');    
    storageWriteus = localStorage.getItem('userWriteLetter');
  } catch (err) {
    isStorageSupport = false;
  }

var linkOrder = document.querySelector('.order-user');
var popupOrder = document.querySelector('.order-popup');
var overlayOrder = document.querySelector('.overlay-order');
var closeOrder = document.querySelector('.overlay-order');

var linkWriteus = document.querySelector('.button-writeus-form');
var popupWriteus = document.querySelector('.writeus-form');
var overlayWriteus = document.querySelector('.overlay-body');
var closeWriteus = document.querySelector('.close');
var closeWriteusAll = document.querySelector('.overlay-body');
var formWriteus = document.querySelector('.writeus-form');
var userName = formWriteus.querySelector('[name=name]');
var userEmailWriteus = formWriteus.querySelector('[name=email-writeus]');
var userWriteLetter = formWriteus.querySelector('[name=write-letter]');
var isStorageSupportWriteus = true;
var storageWriteus = '';
try {
    storageWriteus = localStorage.getItem('userName');
  } catch (err) {
    isStorageSupportWriteus = false;
  }

  linkWriteus.addEventListener('click', function (evt) {
    evt.preventDefault();
    formWriteus.classList.add('modal-show-writeus');
    overlayWriteus.classList.add('modal-show');
    if (storageWriteus) {
    userName.value = storageWriteus;
    userEmailWriteus.value = storageWriteus;
    userWriteLetter.focus();
  } else {
  	userName.focus();
  }
    popupSearch.classList.remove('modal-show');
    overlaySearch.classList.remove('modal-show');
    popupLogin.classList.remove('modal-show');
    overlayLogin.classList.remove('modal-show');
    popupOrder.classList.remove('modal-show-block');
    overlayOrder.classList.remove('modal-show');
  });

closeWriteus.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWriteus.classList.remove('modal-show-writeus');
    overlayWriteus.classList.remove('modal-show');
    popupWriteus.classList.remove("modal-error-writeus");
  });

closeWriteusAll.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWriteus.classList.remove('modal-show-writeus');
    overlayWriteus.classList.remove('modal-show');
    popupWriteus.classList.remove('modal-error-writeus');
  });

formWriteus.addEventListener('submit', function (evt) {
    if (!userName.value || !userEmailWriteus.value) {
      evt.preventDefault();
        console.log("Нужно ввести ваши данные !");
        formWriteus.classList.remove('modal-error-writeus');
        formWriteus.offsetWidth = formWriteus.offsetWidth;
        formWriteus.classList.add('modal-error-writeus');
    } else {
      if (isStorageSupportWriteus) {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('userEmailWriteus', userEmailWriteus.value);
        localStorage.setItem('userWriteLetter', userWriteLetter.value);
      }
    }
  });

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupWriteus.classList.contains('modal-show-writeus')) {
        popupWriteus.classList.remove('modal-show-writeus');
        overlayWriteus.classList.remove('modal-show');
      }
    }
  });

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

linkUser.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupLogin.classList.add('modal-show');
    overlayLogin.classList.add('modal-show');
    if (storage) {
    userEmail.value = storage;
    userPassword.value = storage;
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
        localStorage.setItem('userPassword', userPassword.value);
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