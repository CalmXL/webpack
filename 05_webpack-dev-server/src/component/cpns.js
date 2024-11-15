import '../css/div.style.css';
import '../css/title.style.less';
import '../css/bg_style.css';

// 引入图片模块
import lyfImg from '../img/lyf.jpeg';
import girlImg from '../img/girl.jpeg';

const divEl = document.createElement('div');

divEl.textContent = 'Hello, World';
divEl.classList.add('content');

document.body.append(divEl);

const titleEl = document.createElement('h2');
titleEl.textContent = '哈哈哈';
titleEl.classList.add('title');
document.body.append(titleEl);

// 创建 img
const imgEl = document.createElement('img');
imgEl.src = lyfImg;
document.body.append(imgEl);

const imgEl2 = document.createElement('img');
imgEl2.src = girlImg;
document.body.append(imgEl2);

const divBgEl = document.createElement('div');
divBgEl.classList.add('img-bg');
document.body.append(divBgEl);
