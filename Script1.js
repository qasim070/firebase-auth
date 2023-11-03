// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDsIgeUsh8QUeIEkdV_RGQJJT_0VupTzAw",
    authDomain: "first-firebase-app-mq.firebaseapp.com",
    databaseURL: "https://first-firebase-app-mq-default-rtdb.firebaseio.com",
    projectId: "first-firebase-app-mq",
    storageBucket: "first-firebase-app-mq.appspot.com",
    messagingSenderId: "724536199371",
    appId: "1:724536199371:web:8bb0f82c40808b1b57b34e",
    measurementId: "G-7140SRP10T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const auth = getAuth(app);

const email=document.getElementById('myEmail')
const password=document.getElementById('myPassword')
const loginBtn=document.getElementById('btn')

const createUser=(auth,email,password)=>{

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      location.href="login.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });


}
loginBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  createUser(auth,email.value,password.value)
  
})




