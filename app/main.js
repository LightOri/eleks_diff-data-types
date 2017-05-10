import './styles/style.scss';
import './scripts/jQueryAJAX.js';
import './scripts/JSON.js';
import './scripts/Promises.js';
import './scripts/xmlHttpRequest.js';

// handling RESET button
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', handleReset);

function handleReset(e) {
  location.reload()
};
