// nomodule
import './utils/supportJavaScript.js';
import './vanilaDOM.js'

// 명령형 프로그래밍
const root = document.getElementById('root');
const headline = root.querySelector('h1');

document.addEventListener('click', () => {
  headline.textContent = 'update headline content';
})

// 선언형 프로그래밍
import { } from './vanila.script.js';

console.log(state);

// render(state);

// console.log('React 개발 시작하기! 😊');
