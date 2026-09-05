import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Home from './pages/Home';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer 
          position="bottom-right"
          theme="colored"
          autoClose={3000}
        />
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;
