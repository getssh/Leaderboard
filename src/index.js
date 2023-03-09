import './style.css';

const userName = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('.submit-score');
const scoreTable = document.querySelector('.score-table');
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = '4mvJYTSh7H5F6fBw4moX';

const showTable = (scoreData) => {
  scoreTable.innerHTML = '';
  const eachData = scoreData.map((element) => `<tr><td>${element.user}:</td><td>${element.score}</td></tr>`);
  scoreTable.innerHTML = eachData;
};

const addNewScore = async (userName, socreValue) => {
  const postData = await fetch(`${apiEndPoint}/${gameId}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: socreValue,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const response = await postData.json();
  console.log(response);
};

const getScores = async () => {
  const getScores = await fetch(`${apiEndPoint}/${gameId}/scores`);
  const scores = await getScores.json();
  const socreResult = scores.result;

  showTable(socreResult);
  console.log(socreResult);
  console.log(socreResult.length);
};

addNewScore('John kebded', 77);
getScores();