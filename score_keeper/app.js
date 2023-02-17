const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winingScoreselect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let isGamerOver = false;

p1Button.addEventListener('click', function (){
  if (!isGamerOver) {
    p1Score ++;
    if (p1Score === winingScore) {
    isGamerOver = true;
    p1Display.style.color = 'green';
    p2Display.style.color = 'red';
    p1Button.disabled = true;
    p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});


p2Button.addEventListener('click', function (){
  if (!isGamerOver) {
    p2Score ++;
    if (p2Score === winingScore) {
    isGamerOver = true;
    p2Display.style.color = 'green';
    p1Display.style.color = 'red';
    p1Button.disabled = true;
    p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

winingScoreselect.addEventListener('change', function (){
  winingScore = parseInt(this.value)
  reset();
})

resetButton.addEventListener('click', reset)

function reset() {
  isGamerOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p2Display.style.color = 'black';
  p1Display.style.color = 'black';
  p1Button.disabled = false;
  p2Button.disabled = false;
}
