import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import Homepage from './views/pages/home';
import LoginPage from './views/pages/login';
import RegisterPage from './views/pages/register';
import Page404 from './views/pages/page404';
import Page500 from './views/pages/page500';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/500" element={<Page500 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
