import React from 'react';
import ReactDOM from 'react-dom/client';
import VariantA from './components/VariantA';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VariantA effectsIntensity={0.55} />
  </React.StrictMode>
);
