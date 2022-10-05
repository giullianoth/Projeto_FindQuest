import React from 'react';
import ReactDOM from 'react-dom/client';
import Web from './theme/components/pages/Web';
import './theme/assets/styles/style.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web />
  </React.StrictMode>
);