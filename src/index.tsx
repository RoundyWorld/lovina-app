import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Favicon url={require('./assets/snake128.png')} />
      <Helmet>
        <title>Snekly</title>
      </Helmet>
    </HelmetProvider>
    <App />
  </React.StrictMode>
);
