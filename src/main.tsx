import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import this
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>     {/* 👈 Wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
