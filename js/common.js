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

var linkWrite = document.querySelector('.button-writeus-form');
var popupWrite = document.querySelector('.writeus-form');
var overlayWrite = document.querySelector('.overlay-body');
var closeWrite = popupWrite.querySelector('.close');
var closeAll = document.querySelector('.overlay-body');

var formWrite = document.querySelector(".writeus-form");
var userName = formWrite.querySelector("[name=name]");
var userMail = formWrite.querySelector("[name=email-writeus]");
var userTextarea = formWrite.querySelector("[name=write-letter]");
var isStorageSupportWrite = true;
var storageWrite = '';

try {
  storageWrite = localStorage.getItem("userName");
  storageWrite = localStorage.getItem("userMail");
  storageWrite = localStorage.getItem("userTextarea");
} catch (err) {
  isStorageSupportWrite = false;
} 

linkWrite.addEventListener('click', function (evt){
  evt.preventDefault();
  popupWrite.classList.add('modal-show');
  overlayWrite.classList.add('modal-show');

  popupLogin.classList.remove('modal-show');
  overlayLogin.classList.remove('modal-show');

  popupSearch.classList.remove('modal-show');
  overlaySearch.classList.remove('modal-show');
  if (storageWrite) {
    userName.value = storageWrite;
    userMail.value = storageWrite;
    userTextarea.focus();
  } else {
    userName.focus();
  }
});

formWrite.addEventListener("submit", function (evt) {
  if (!userMail.value || !userTextarea.value) {
    evt.preventDefault();
    popupWrite.classList.remove("modal-error");
    popupWrite.offsetWidth = popupWrite.offsetWidth;
    popupWrite.classList.add("modal-error");
    console.log("Нужно ввести ваши данные !");
  } else {
    if (isStorageSupportWrite) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userMail", userMail.value);
      localStorage.setItem("userTextarea", userTextarea.value);
    }
  }
});

closeWrite.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWrite.classList.remove('modal-show');
    overlayWrite.classList.remove('modal-show');
    popupWrite.classList.remove('modal-error');
});

closeAll.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWrite.classList.remove('modal-show');
    overlayWrite.classList.remove('modal-show');
    popupWrite.classList.remove('modal-error');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupWrite.classList.contains('modal-show')) {
        popupWrite.classList.remove('modal-show');
        overlayWrite.classList.remove('modal-show');
        popupWrite.classList.remove('modal-error');
      }
    }
  });