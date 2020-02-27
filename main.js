// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.getElementsByClassName('like-glyph');
const errorModal = document.getElementById('modal');

function addEventToHeart() {
  for(heart of hearts){
    heart.addEventListener('click', function(e){
      mimicServerCall()
      .then(test1 =>{
        console.log(test1)
        toggleHeart(e.target);
      })
      .catch(message => {
        errorModal.classList.remove('hidden');
        errorModal.children[1].innerText = message;
        setTimeout(function(){
          errorModal.classList.add('hidden');
        }, 5000);
      })
    })
  };
};

function toggleHeart(heart) {
  if (heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    heart.classList.add('activated-heart');
  } else {
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  };
};

window.addEventListener('DOMContentLoaded', function(e){
  addEventToHeart();
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
