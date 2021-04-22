// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA_P6bUGkc4PRC-UnKuUBrD8vFS-TBX6lw",
  authDomain: "masstext-91411.firebaseapp.com",
  projectId: "masstext-91411",
  storageBucket: "masstext-91411.appspot.com",
  messagingSenderId: "429724872239",
  appId: "1:429724872239:web:17f5e7d8289601a24fe0da",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// [START auth_state_listener]
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    console.log(uid);
    console.log(user.email);
    console.log(user.metadata.lastSignInTime);
    console.log(user);

    alertify.success(`Logged in as ${user.email}`);

    // ...
  } else {
    // User is signed out
    console.log("SIGNED OUT");
    alertify.warning(`Signed Out Successfully !`);
    // ...
  }
});
// [END auth_state_listener]

// Capture Username and Password

const signIn = document.querySelector("#signin-btn");
signIn.addEventListener("click", onSignIn);
const signOut = document.querySelector("#signout-btn");
signOut.addEventListener("click", onSignOut);

function onSignIn() {
  userEmail = document.querySelector("#email-input-user").value;
  userPassword = document.querySelector("#password-input-user").value;

  // [START auth_signin_password]
  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("SIGNED IN");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  // [END auth_signin_password]
}
function onSignOut() {
  // [START auth_sign_out]
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  // [END auth_sign_out]
}
