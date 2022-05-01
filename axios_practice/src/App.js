import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// page
import MainPage from './Pages/Main/MainPage';
import MyPage from './Pages/My/MyPage';
import InfinitiScroll from './Pages/IntersectionObserver/IntersectionObserver';
import Bg from './Pages/Bg/Bg';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/infinite" element={<InfinitiScroll />} />
        <Route path="/bg" element={<Bg />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;