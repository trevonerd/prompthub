import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PromptDetailPage from './pages/PromptDetailPage';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prompt/:id" element={<PromptDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
