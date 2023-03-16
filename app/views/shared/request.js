const url = 'http://localhost:9099/api';
const currentRequestsList = [ ];

const newResponse = () => currentRequestsList.at(currentRequestsList.length - 1);

async function getData(question) {
  try {
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ consult: question }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = await fetch(request);
    const answer = await response.text();

    if (response.status === 200) {
      currentRequestsList.push({ question, answer });
    }

  } catch (err) {
    throw err;
  }
}