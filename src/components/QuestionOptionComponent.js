import React from 'react';
import '../QuestionOptionComponent.css'; 

const QuestionOptionComponent = ({ option, onSelect }) => (
    <button 
        onClick={() => onSelect(option.optionText)} 
        className="option-button" 
    >
        {option.optionText}
    </button>
);

export default QuestionOptionComponent;
