import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Use BrowserRouter for SEO
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>   {/* ✅ Cleaner URLs, better for SEO */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
