const answerContainer = document.getElementById('answers');

function updateResponses() {
  const card = document.createElement('div');
  const cardHeader = document.createElement('div');
  const cardBody = document.createElement('div');
  const questionTitle = document.createElement('h4');
  const answerElement = document.createElement('pre');
  const { answer, question } = newResponse();

  card.classList.add('card', 'my-3', 'animate__animated', 'animate__fadeIn');
  cardHeader.classList.add('card-header', 'px-0');
  cardBody.classList.add('card-body');
  answerElement.classList.add('text-break');
  questionTitle.classList.add('px-3');

  questionTitle.textContent = question;
  answerElement.textContent = answer;

  txtQuestion.value = null;

  cardHeader.appendChild(questionTitle);
  cardBody.appendChild(answerElement);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  answerContainer.insertBefore(card, answerContainer.firstChild);
}