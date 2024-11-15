// import './component/cpns';
import { createApp } from 'vue';
import Hello from './vue-demo/Hello';
import './utils/abc/cba/nba/test';
import './utils/abc/demo';

createApp(Hello).mount('#app');

const message = 'Hello, World';

function sum(a, b) {
  return a + b;
}

console.log(message.length);
console.log(sum(1022, message.length));

sum(1, 2222);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 使用 DefinePlugin 注入的变量
console.log(codewhy, counter);

console.log(process.env.NODE_ENV);

// 指定哪一个模块需要 HMR
if (module.hot) {
  module.hot.accept('./utils/abc/demo.js', () => {
    console.log('demo 模块发生了更新');
  });
}
