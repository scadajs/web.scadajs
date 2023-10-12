import './assets/style.css';
// eslint-disable-next-line import/no-absolute-path, import/no-unresolved
import jsLogo from '/jslogo.png';
import { setupCounter } from './counter';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import './loader';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://scadajs.com" target="_blank">
      <img src="${jsLogo}" class="logo" alt="js logo" />
    </a>
    <h1>scadajs.com!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the js logo to learn more about scadajs.com
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9vwr4L8dE-bUx_OYKdOC0WR1bqwuna0Q',
  authDomain: 'scadajscom-vx.firebaseapp.com',
  projectId: 'scadajscom-vx',
  storageBucket: 'scadajscom-vx.appspot.com',
  messagingSenderId: '510018468329',
  appId: '1:510018468329:web:4006b9632895760dd47378',
  measurementId: 'G-QS7QD5ZD4R',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

console.log(`firebase initialized: ${app.name}`);
console.log(`google analytics: ${analytics.app.name}`);
