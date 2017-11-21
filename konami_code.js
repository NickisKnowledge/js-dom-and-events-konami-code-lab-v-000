const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', onKeyDownHandler);
}

let i = 0;
function onKeyDownHandler(keyPressed) {
  const key = parseInt(keyPressed.detail || keyPressed.which);

  if (key === code[i]) {
    i++;

    if (i === code.length) {
      alert('You cracked the code');

      index = 0;
    }
  } else {
    index = 0;
  }
}
