import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import YoutubeComponent from './component/YoutubeComponent/YoutubeComponent';
import Home from './container/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';

ReactDOM.render(
    <Home />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
