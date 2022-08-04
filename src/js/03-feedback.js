const form = document.querySelector(`.feedback-form`);
const textArea = document.querySelector(`textarea`);
// console.log(form, textArea);

form.addEventListener(`input`, onForm);
textArea.addEventListener(`blur`, onTextArea);

function onTextArea(event) {
  //   const textInput = event.currentTarget.value;
  //   localStorage.setItem(`feedback-form-state`, textInput);
}

function onForm(event) {
  const curentValue = {
    email: event.currentTarget.value,
    message: event.currentTarget.value,
  };
  console.log(curentValue);
  //   localStorage.setItem(`feedback-form-state`, JSON.stringify(curentValue));
  // const textInput = event.currentTarget.value;
  // localStorage.setItem(`text-area`, textInput);
}
