import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// page
import MainPage from './Pages/Main/MainPage';
import MyPage from './Pages/My/MyPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;