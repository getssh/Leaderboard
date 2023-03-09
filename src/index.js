import './style.css';

const userName = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('.submit-score');
const scoreTable = document.querySelector('.score-table');
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'GlLBSxZJ2Lt3ESEwpZKy';

const showTable = (scoreData) => {
  scoreTable.innerHTML = '';
  const tableBody = document.createElement('tbody');
  tableBody.className = 'score-table-rows';
  const eachData = scoreData.map((element) => `<tr><td>${element.user}:</td><td>${element.score}</td></tr>`);
  tableBody.innerHTML = eachData.join('');
  scoreTable.appendChild(tableBody);
};

const addNewScore = async (userName, socreValue) => {
  let postData;
  try {
    postData = await fetch(`${apiEndPoint}/${gameId}/scores`, {
      method: 'POST',
      body: JSON.stringify({
        user: userName,
        score: socreValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (error) {
    console.log(error);
  }

  if (postData.status === 201) {
    const response = await postData.json();
    console.log(response);
  } else {
    const errorText = await postData.json();
    console.log('File creation failed', postData.status, errorText.message);
  }
};

const getScores = async () => {
  const getScores = await fetch(`${apiEndPoint}/${gameId}/scores`);
  const scores = await getScores.json();
  const socreResult = scores.result;

  showTable(socreResult);
  console.log(socreResult);
  console.log(socreResult.length);
};

// addNewScore('Abera Bera', 89);
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addNewScore(userName.value, score.value);
  userName.value = '';
  score.value = '';
  getScores();
});
getScores();