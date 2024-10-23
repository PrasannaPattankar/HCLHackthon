import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import PublicHealthInfo from './components/PublicHealthInfo';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={PublicHealthInfo} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={PatientDashboard} />
    </Router>
  );
}

export default App;
