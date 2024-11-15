const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', reloadFoo);
function reloadFoo() {
  const storageData = localStorage.getItem(localStorageKey);
  if (storageData) {
    const pageReboot = JSON.parse(storageData);
    input.value = pageReboot.email;
    textArea.value = pageReboot.message;
    formData.email = pageReboot.email;
    formData.message = pageReboot.message;
  }
}

form.addEventListener('input', inputFoo);
function inputFoo() {
  formData.email = input.value.trim();
  formData.message = textArea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', submitFoo);
function submitFoo(event) {
  event.preventDefault();
  const emailValue = event.target.elements.email.value.trim();
  const messageValue = event.target.elements.message.value.trim();
  if (!emailValue || !messageValue) {
    alert('Fill please all fields');
    return;
  }
  formData.email = emailValue;
  formData.message = messageValue;
  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
}
