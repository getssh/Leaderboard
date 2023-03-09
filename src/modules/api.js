const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const gameId = 'GlLBSxZJ2Lt3ESEwpZKy';

export const addNewScore = async (userName, socreValue) => {
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
    console.log(response.status);
    window.location.reload();
  } else {
    const errorText = await postData.json();
    console.log('File creation failed', postData.status, errorText.message);
  }
};

export const getScores = async () => {
  const getScores = await fetch(`${apiEndPoint}/${gameId}/scores`);
  const scores = await getScores.json();
  const scoreResult = scores.result;

  console.log(scoreResult);
  return scoreResult;
};