import React from 'react';

const QuestionOptionComponent = ({ option, onSelect }) => (
    <button onClick={() => onSelect(option.optionText)}>
        {option.optionText}
    </button>
);

export default QuestionOptionComponent;
