// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerScoresList from './components/PlayerScoresList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/player-scores" element={<PlayerScoresList />} />
            </Routes>
        </Router>
    );
};

export default App;
