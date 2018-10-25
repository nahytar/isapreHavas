document.addEventListener('DOMContentLoaded', function () {

  try {
    let app = firebase.app();
    var uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

      ],
      // Terms of service url.
      tosUrl: '/'
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

  } catch (e) {
    console.error(e);
  }
});
