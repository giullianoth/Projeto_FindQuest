import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from './components/pages/Web';
import './assets/styles/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>
);