let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    let right = document.getElementById("game").clientWidth - left
        if (left < 360) {
    // if (right - dodger.offsetWidth > 0 ) {
        // above code works with whatever size the game div is
        dodger.style.left = `${left + 5}px`
    }

}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });