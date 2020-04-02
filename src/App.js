// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyDHlbxIIx7nNg7LbQLSLs3NTggBHSDKObs",
    authDomain: "api-project-640186369662.firebaseapp.com",
    databaseURL: "https://api-project-640186369662.firebaseio.com",
    projectId: "api-project-640186369662",
    storageBucket: "api-project-640186369662.appspot.com",
    messagingSenderId: "640186369662",
    appId: "1:640186369662:web:100104a996d76af7987a2f"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
    callbacks: {
        signInSuccess: function (currentUser, credential, redirectUrl) {
            console.log('signin success');
            return true;
        }
    },
    credentialHelper: 'none',

      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/signedIn',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ]
};


function App() {
  return (
    <div>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
}

export default App;
