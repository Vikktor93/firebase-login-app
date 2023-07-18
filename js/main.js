import {
  app, auth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup
} from './config.js';

//Registro de Usuarios
const signupForm = document.querySelector('#signup-form')
const signupModal = document.getElementById('signupModal')
const modal = new mdb.Modal(signupModal)

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      signupForm.reset()
      modal.hide()
      console.log('Registro con Éxito')
    })
})

//Inicio de Sesion Email/Password
const signinForm = document.querySelector('#login-form')

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      signinForm.reset()
      window.location.href = "inicio.html"
      console.log('Inicio de sesión con éxito')
    })
})

//Inicio de Sesion con Google
const googleLogin = document.querySelector('#googlelogin')
googleLogin.addEventListener('click', (e) => {
  console.log('Inicio de sesión con Google')

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then(result => {
    console.log('¡Inicio de sesión con Google exitoso!'); //Agregamos el log de éxito
    //Esto le da un token de acceso de Google para acceder
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user; //Información del usuario registrado
    window.location.href = "inicio.html"
  }).catch((error) => {
    console.log('Inicio de sesión con Google fallido:', error.message); //Agregamos el log de fallo
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})

//Inicio de Sesion con Facebook
const FBlogin = document.querySelector('#fb-login')
FBlogin.addEventListener('click', (e) => {
  e.preventDefault();
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider).then(result => {
    window.location.href = "inicio.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})

//Inicio de Sesion con Twitter
const twitterLogin = document.querySelector('#twitterlogin');
twitterLogin.addEventListener('click', (e) => {
  console.log('Inicio de sesión con Twitter');

  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider).then(result => {
    console.log('¡Inicio de sesión con Twitter exitoso!'); //Agregamos el log de éxito
    // Esto le da un token de acceso de Twitter para acceder
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    const user = result.user; //Información del usuario registrado
    window.location.href = "inicio.html";
  }).catch((error) => {
    console.log('Inicio de sesión con Twitter fallido:', error.message); //Agregamos el log de fallo
    const errorCode = error.code;
    const errorMessage = error.message;
    const credential = TwitterAuthProvider.credentialFromError(error);
  });
});
