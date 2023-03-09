import './style.css';

const gameId = '4mvJYTSh7H5F6fBw4moX';

const addNewScore = async (userName, socreValue) => {
  const postData = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
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
  const getScores = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const scores = await getScores.json();

  console.log(scores);
  console.log(scores.result.length);
};

addNewScore('John Doe', 42);
getScores();