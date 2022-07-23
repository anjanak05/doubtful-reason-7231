import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NationMainPage from './Nation/NationMainPage';
import SouthMainPage from './South/SouthMainPage';


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NationMainPage />}></Route>
        <Route path="/SouthMainPage" element={<SouthMainPage />}></Route>
       
             </Routes>
    </div>
  );
};

export default AllRoutes;