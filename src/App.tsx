import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import WeatherAdvisory from './pages/WeatherAdvisory';
import CropAdvisory from './pages/CropAdvisory';
import FinancialTools from './pages/FinancialTools';
import FarmingAssistance from './pages/FarmingAssistance';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="weather-advisory" element={<WeatherAdvisory />} />
          <Route path="crop-advisory" element={<CropAdvisory />} />
          <Route path="financial-tools" element={<FinancialTools />} />
          <Route path="farming-assistance" element={<FarmingAssistance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;