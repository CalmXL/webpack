// import './component/cpns';
import { createApp } from 'vue';
import Hello from './vue-demo/Hello';
import './utils/abc/cba/nba/test';

createApp(Hello).mount('#app');

const message = 'Hello, World';

function sum(a, b) {
  return a + b;
}

console.log(message.length);
console.log(sum(10, message.length));

sum(1, 2);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
