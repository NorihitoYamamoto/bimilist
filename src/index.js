import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
      identityPoolId: 'ap-northeast-1:df3459fe-f361-455d-9be8-0ac6629071ae',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_4wTEMtij4',
      userPoolWebClientId: '1895mokavg4n6bd52s7qk5foqb',
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
