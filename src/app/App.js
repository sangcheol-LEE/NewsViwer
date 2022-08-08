import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../view/Home';
import NewsView from '../view/NewsView';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/news/:category" element={ <NewsView />}/>
    </Routes>
  );
};

export default App;