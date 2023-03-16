const QuestionSltContainer = document.getElementById('QuestionSltContainer');
const QuestionContainer = document.getElementById('QuestionContainer');

const sltFramework = document.getElementById('sltFramework');
const sltQuestion = document.getElementById('sltQuestion');
const chkQuestion = document.getElementById('chkQuestion');
const txtQuestion = document.getElementById('txtQuestion');

const btnAsk = document.getElementById('btnAsk');

const languages = ['JavaScript', 'Java', 'C#', 'Phyton', 'Ruby', 'Pearl'];

const questions = [
  {
    value: 'funcionan los tipos de datos',
    text: 'Funcionamiento de tipos de datos'
  },
  {
    value: 'funcionan los ciclos for',
    text: 'Funcionamiento de ciclos for'
  },
  {
    value: 'crear una calculadora',
    text: 'Crear una calculadora'
  },
  {
    value: 'crear un modelo de herencias',
    text: 'Crear un modelo de herencias'
  },
  {
    value: 'funcionan los iterables',
    text: 'Funcionamiento de iterables'
  },
  {
    value: 'realizar peticiones a un api externo',
    text: 'Realizar peticiones a un api externo'
  },
  {
    value: 'implementar jwt',
    text: 'Implementar jwt'
  }
]

let show = false;

window.addEventListener('load', (event) => {
  for (let i = 0; i < languages.length; i++) {
    sltFramework.add(new Option(languages[i], languages[i]));
  }
  
  for (let j = 0; j < questions.length; j++) {
    const { value, text } = questions[j];
    sltQuestion.add(new Option(text, value));
  }
});

chkQuestion.addEventListener('change', () => {
  show = !show;
  if (show) {
    QuestionContainer.classList.remove('visually-hidden');
    QuestionSltContainer.classList.add('visually-hidden');
  } else {
    QuestionContainer.classList.add('visually-hidden');
    QuestionSltContainer.classList.remove('visually-hidden');
  }
});

btnAsk.addEventListener('click', () => {
  btnAsk.disabled = true;
  if (show) {
    doInputQuestion();
  } else doSltQuestions();
});

function doSltQuestions() { 
  const selectedLanguaje = sltFramework.value.toLowerCase();
  const selectedQuestion = sltQuestion.value;
  const question = `Como ${selectedQuestion} en el lenguaje de programación ${selectedLanguaje}`;

  getData(question).then(() => {
    btnAsk.disabled = false;
    updateResponses()
  });
}

function doInputQuestion() {
  const selectedLanguaje = sltFramework.value;
  const sQuestion = txtQuestion.value;
  const question = `${sQuestion} en el lenguaje de programación ${selectedLanguaje}`;

  getData(question).then(() => {
    btnAsk.disabled = false;
    updateResponses()
  });
}