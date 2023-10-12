import './assets/style.css';
// eslint-disable-next-line import/no-absolute-path, import/no-unresolved
import jsLogo from '/jslogo.png';
import { setupCounter } from './counter';

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
