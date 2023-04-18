import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import Timer from './Timer'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>DOSTUFF</h1>
    <h2>the app for your stuff........to do....</h2>
    <Timer />
    <App />
  </React.StrictMode>
);
reportWebVitals();
