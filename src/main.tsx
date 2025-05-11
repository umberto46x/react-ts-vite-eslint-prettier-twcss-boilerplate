import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <h1 className="text-4xl font-bold text-center text-indigo-600 mt-8 mb-4 hover:text-blue-500">
      Hello TW
    </h1>
  </StrictMode>
);
