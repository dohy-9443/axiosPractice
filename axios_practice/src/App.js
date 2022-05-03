import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// page
import MainPage from "./Pages/Main/MainPage";
import MyPage from "./Pages/My/MyPage";
import Bg from "./Pages/Bg/Bg";
import SearchPage from "./Pages/SearchAPI/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/bg" element={<Bg />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
