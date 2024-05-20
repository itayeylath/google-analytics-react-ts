import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GAInitializer from './google-analytics/GAInitializer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* TODO: add GAInitializer to your main/index.tsx */}
    <GAInitializer>
      <App />
    </GAInitializer>
  </React.StrictMode>
);

