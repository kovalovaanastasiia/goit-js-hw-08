import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};
const LOCAL_STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(inputFormHandler, 500));

function inputFormHandler(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function fillTextarea() {
  const saveDataObj = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (saveDataObj) {
    formData = JSON.parse(saveDataObj);
    formEl.email.value = formData.email;
    formEl.message.value = formData.message;
  }
}

fillTextarea();

formEl.addEventListener('submit', submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();
  if (formEl.email.value && formEl.message.value) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    event.target.reset();
    console.log(formData);
    return;
  }
  alert(`Fill in all fields!`);
}



