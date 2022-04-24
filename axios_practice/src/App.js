import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// page
import MainPage from './Pages/Main/MainPage';
import MyPage from './Pages/My/MyPage';
import InfinitiScroll from './Pages/IntersectionObserver/IntersectionObserver';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/infinite" element={<InfinitiScroll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;