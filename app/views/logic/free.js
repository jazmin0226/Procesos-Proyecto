const txtQuestion = document.getElementById('txtQuestion');
const btnQuestion = document.getElementById('btnQuestion');
const btnResetQuestion = document.getElementById('btnResetQuestion');

btnQuestion.addEventListener('click', () => {
  if (txtQuestion.value) {
    toggleOffButtonsState();
    getData(txtQuestion.value).then(() => {
      updateResponses();
      toggleOnButtonsState();
    });
  }
});

btnResetQuestion.addEventListener('click', () => txtQuestion.value = null);

function toggleOnButtonsState() {
  btnQuestion.disabled = false;
  btnResetQuestion.disabled = false;
}

function toggleOffButtonsState() {
  btnQuestion.disabled = true;
  btnResetQuestion.disabled = true;
}