import './style.css';
import { getScores, addNewScore } from './modules/api.js';

const userName = document.querySelector('#name');
const score = document.querySelector('#score');
const submitBtn = document.querySelector('.submit-score');
const scoreTable = document.querySelector('.score-table');

const showTable = (scoreData) => {
  scoreTable.innerHTML = '';
  const tableBody = document.createElement('tbody');
  tableBody.className = 'score-table-rows';
  const eachData = scoreData.map((element) => `<tr><td>${element.user}:</td><td>${element.score}</td></tr>`);
  tableBody.innerHTML = eachData.join('');
  scoreTable.appendChild(tableBody);
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  addNewScore(userName.value, score.value);
  userName.value = '';
  score.value = '';
});

getScores().then(
  (value) => showTable(value),
  (error) => console.log(error),
);