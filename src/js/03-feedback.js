import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);

const STORAGE_KEY = 'feedback-form-state';
const inputData = {};

form.addEventListener(`input`, throttle(onForm, 500));
form.addEventListener('submit', formSubmit);

refreshForm();

function onForm(event) {
  event.preventDefault();
  inputData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));
}

function refreshForm(event) {
  const refreshText = localStorage.getItem(STORAGE_KEY);
  const parsedRefreshText = JSON.parse(refreshText);

  if (parsedRefreshText) {
    Object.entries(parsedRefreshText).forEach(([name, value]) => {
      inputData[name] = value;
      form.elements[name].value = value;
    });
  }
}

function formSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
}
