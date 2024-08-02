import React from 'react';
import '../QuestionComponent.css'; 

const QuestionComponent = ({ question, onAnswer }) => {
    if (!question) return null;

    return (
        <div className="question-container">
            <h2 className="question-text">{question.text}</h2>
            {question.questionOptions.$values.map((option) => (
                <button 
                    key={option.optionId} 
                    onClick={() => onAnswer(option.optionText)} 
                    className="question-button"
                >
                    {option.optionText}
                </button>
            ))}
        </div>
    );
};

export default QuestionComponent;
