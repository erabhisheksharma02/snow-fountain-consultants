import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Load scripts once globally
const loadScriptsOnce = () => {
  if (!window.scriptsLoaded && window.jQuery) {
    const coreScript = document.createElement('script');
    coreScript.src = '/js/core.min.js';
    coreScript.async = false;
    document.body.appendChild(coreScript);

    coreScript.onload = () => {
      const mainScript = document.createElement('script');
      mainScript.src = '/js/script.js';
      mainScript.async = false;
      document.body.appendChild(mainScript);
      
      mainScript.onload = () => {
        window.scriptsLoaded = true;
      };
    };
  } else if (!window.jQuery) {
    setTimeout(loadScriptsOnce, 100);
  }
};

// Hide preloader
const hidePreloader = () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('loaded');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 300);
    }, 500);
  }
};

// Initialize once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadScriptsOnce();
    hidePreloader();
  });
} else {
  loadScriptsOnce();
  hidePreloader();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
