import React, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function Batata() {
  const [canViewApp, setCanViewApp] = useState(true)
  return <>
    {
      canViewApp &&
      <App />
    }
    <button
      onClick={() => {
        setCanViewApp(!canViewApp)
      }}
    >
      toggle
    </button>
  </>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Batata />
  </React.StrictMode>
);
