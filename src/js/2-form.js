const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

form.addEventListener('input', inputFoo);
function inputFoo() {
  formData.email = input.value.trim();
  formData.message = textArea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

const pageReboot = JSON.parse(localStorage.getItem(localStorageKey) || {});

if (Object.values(pageReboot).length) {
  input.value = pageReboot.email;
  textArea.value = pageReboot.message;
  formData.email = pageReboot.email;
  formData.message = pageReboot.message;
}

form.addEventListener('submit', submitFoo);
function submitFoo(event) {
  if (
    event.target.elements.email.value.trim() === '' ||
    event.target.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  } else {
    event.preventDefault();
    formData.email = event.target.elements.email.value.trim();
    formData.message = event.target.elements.message.value.trim();
    localStorage.removeItem(localStorageKey);
    form.reset();
    console.log(formData);
  }
}
