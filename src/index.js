import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './pages/home';
import Project from './pages/project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);