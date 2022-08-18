const cards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockboard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockboard) return;
  if (this === firstCard) return;


  this.classList.add("flip");
  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }




    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMath();
    
  }

function checkForMath(){
  let isMath =firstCard.dataset.framework ===
  secondCard.dataset.framework;
isMath ? disableCards() : unflipCards();

  

}

function disableCards(){
  firstCard.removeEventLister("click", flipCard);
    secondCard.removeEventLister("click", flipCard);
    resetBoard();
}
function unflipCards(){
  lockboard = true;
   setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);

}

function resetBoard(){
  hasFlippedCard = false;
  lockboard= false;
  firstCard  =  null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12 );
    card.style.order = randomPos;
  });

})();
 

cards.forEach(card => card.addEventListener('click', flipCard));
