// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
};

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 400 - 40) {
        dodger.style.left = `${right + 10}px`;
    }
}

function moveDodgerDown() {
    const downNumbers = dodger.style.bottom.slice(0, -2);
    const down = parseInt(downNumbers);

    if (down > 0) {
        dodger.style.bottom = `${down - 10}px`;
    }
}

function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.slice(0, -2);
    const up = parseInt(upNumbers);
    if (up < 380) {
        dodger.style.bottom = `${up + 10}px`;
    }
}

document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case 'ArrowLeft':
            moveDodgerLeft();
            break;
        case 'ArrowRight':
            moveDodgerRight();
            break;
        case 'ArrowDown':
            moveDodgerDown();
            break;
        case 'ArrowUp':
            moveDodgerUp();
            break;
        default:
            break;
    }
})