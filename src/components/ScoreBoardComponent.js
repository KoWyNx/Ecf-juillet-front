import React from 'react';
import '../ScoreBoardComponent.css'; 

const ScoreBoardComponent = ({ score }) => (
    <div className="score-board-container"> 
        <h2 className="score-board-title">Score:</h2>
        <div className="score-board-score">{score}</div>
    </div>
);

export default ScoreBoardComponent;
