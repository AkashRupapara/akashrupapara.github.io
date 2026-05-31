import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}
window.scrollTo(0, 0);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
