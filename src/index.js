import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import Content from './components/Content';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App>
    <Content />
  </App>
  , document.getElementById('root'));
registerServiceWorker();
