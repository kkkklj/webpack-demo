import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
  const element = document.createElement('div'),
        btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}
let ele = component();
document.body.appendChild(ele);


if(module.hot) {
  module.hot.accept('./print.js',function(){
    console.log('Accepting the updated printMe module!');
    printMe();
    //事件依旧绑定在旧的函数上。所以要重新初始化dom的事件绑定
    document.body.removeChild(ele);
    ele = component();
    document.body.appendChild(ele)
  })
}