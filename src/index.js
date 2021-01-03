import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Wrap this around app to force the window to scroll to the top on new route.
import ScrollTop from './components/entity/ScrollTop'

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <React.StrictMode>
      <ScrollTop>
        <App />
      </ScrollTop>
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
