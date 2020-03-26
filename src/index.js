import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
      identityPoolId: 'ap-northeast-1:ceae9f76-f2cd-4507-b43d-02765e02d4bc',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_4wTEMtij4',
      userPoolWebClientId: '4p1q0m93o4gq2tdvg70i1eld3m',
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
