const errMsg = document.querySelector('.show-error');

export default function showError(errMessage) {
  errMsg.textContent = errMessage;
}