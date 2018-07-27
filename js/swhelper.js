/*======== Service worker ===========*/
// if browser supports sevice worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(registration => {
    // registration succeed
        if (registration.installing) {
            console.log('registration installing');
        } if (registration.waiting) {
            console.log('waiting');
        } if (registration.active) {
            console.log('active');
        }
        console.log('Registration succeed!')
  // if not.... or something went wrong
}).catch (error => {
        console.log('Something went wrong during registration!');
      });
}
