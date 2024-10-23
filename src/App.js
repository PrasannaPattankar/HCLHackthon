import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import PublicHealthInfo from './components/PublicHealthInfo';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PublicHealthInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
