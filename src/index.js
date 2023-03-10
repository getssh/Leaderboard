import './style.css';
import { getScores, addNewScore } from './modules/api.js';

const userName = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('.submit-score');
const scoreTable = document.querySelector('.score-table');
const refresh = document.querySelector('.score-refresh');

const showTable = (scoreData) => {
  scoreTable.innerHTML = '';
  const tableBody = document.createElement('tbody');
  tableBody.className = 'score-table-rows';
  const eachData = scoreData.map((element) => `<tr><td>${element.user}:</td><td>${element.score}</td></tr>`);
  tableBody.innerHTML = eachData.join('');
  scoreTable.appendChild(tableBody);
};

const renderScore = () => {
  getScores().then(
    (value) => showTable(value),
    (error) => console.log(error),
  );
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addNewScore(userName.value, score.value, renderScore);
  userName.value = '';
  score.value = '';
});

refresh.addEventListener('click', () => {
  renderScore();
});

renderScore();