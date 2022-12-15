import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SingleProductPage from './SingleProductPage';

const MainRoutes = () => {
  
    return (
      <Routes>
        <Route path="/page" element={<SingleProductPage />} />
      </Routes>
    );
}

export default MainRoutes