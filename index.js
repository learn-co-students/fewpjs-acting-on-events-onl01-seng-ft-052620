// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


let dodger = document.getElementById('dodger');
let game = document.getElementById('game');
let right_bound = game.offsetWidth - dodger.offsetWidth;

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0){dodger.style.left = `${left - 10}px`;}
}

function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  // if (left < right_bound){dodger.style.left = `${left + 10}px`;}
  dodger.style.left = `${left + 10}px`;
}