// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
const modal = document.getElementById('modal');
modal.classList.add('hidden');

// When a user clicks on an empty heart or a full heart
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('like-glyph')) {
    const heart = event.target;
    
    // Invoke mimicServerCall to simulate making a server request
    mimicServerCall()
      .then(function (response) {  
        // When the "server" returns a success status
        // Change the heart to a full heart if it was empty 
        //looks for if the heart is not 'activated-heart'
        if (!heart.classList.contains('activated-heart')) {
        
          heart.innerText = FULL_HEART;
          heart.classList.add('activated-heart');
        }  else {
        const heart = event.target;
        
        // When a user clicks on a full heart
        // Change the heart back to an empty heart
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
      })
      .catch(function (error) {
        // When the "server" returns a failure status
        // Display the error modal by removing the .hidden class
        modal.classList.remove('hidden');
        // Display the server error message in the modal
        const modalMessage = document.getElementById('modal-message');
        modalMessage.innerText = error;
        // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
        setTimeout(function () {
          modal.classList.add('hidden');
        }, 3000);
      });
 
     
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}