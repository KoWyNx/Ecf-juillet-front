import React from 'react';

const QuestionComponent = ({ question, onAnswer }) => {
    if (!question) return null;

    return (
        <div>
            <h2>{question.text}</h2>
            {question.questionOptions.$values.map((option) => (
                <button key={option.optionId} onClick={() => onAnswer(option.optionText)}>
                    {option.optionText}
                </button>
            ))}
        </div>
    );
};

export default QuestionComponent;
