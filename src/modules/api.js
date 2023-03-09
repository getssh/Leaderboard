const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'GlLBSxZJ2Lt3ESEwpZKy';

export const getScores = async () => {
  const getScores = await fetch(`${apiEndPoint}/${gameId}/scores`);
  const scores = await getScores.json();
  const scoreResult = scores.result;

  return scoreResult;
};

export const addNewScore = async (userName, socreValue, refreshScore) => {
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
    refreshScore();
    console.log(response.status);
  } else {
    const errorText = await postData.json();
    console.log('File creation failed', postData.status, errorText.message);
  }
};