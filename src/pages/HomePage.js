import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllQuestions, submitPlayerScore } from '../api';
import QuestionComponent from '../components/QuestionComponent';
import ScoreBoardComponent from '../components/ScoreBoardComponent';

const HomePage = () => {
    const [questions, setQuestions] = useState([]); 
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false); 
    const [userName, setUserName] = useState(''); 
    const [error, setError] = useState(''); 

    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                // Appelle l'API pour obtenir toutes les questions
                const questionsData = await getAllQuestions();
                console.log('Questions fetched:', questionsData);
                setQuestions(questionsData);

    
                if (questionsData.length > 0) {
                    setCurrentQuestionIndex(0);
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        console.log('Current question index:', currentQuestionIndex);
        console.log('Current question:', currentQuestion);
    }, [currentQuestionIndex, currentQuestion]);

    const handleAnswerClick = (answer) => {
        if (currentQuestion) {
            const correct = currentQuestion.correctAnswer === answer;
            if (correct) {
                setScore(score + 1);
            }


            const nextIndex = currentQuestionIndex + 1;
            if (nextIndex < questions.length) {
                setCurrentQuestionIndex(nextIndex);
            } else {
                setQuizEnded(true);
            }
        }
    };

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSubmitScore = async () => {
        if (!userName) {
            setError('Please enter your name');
            return;
        }

        try {
            await submitPlayerScore({ 
                playerName: userName, 
                score,
                dateRecorded: new Date().toISOString() 
            });
            alert('Score submitted successfully!');

            setUserName('');
            setScore(0);
            setQuizEnded(false);
            setCurrentQuestionIndex(0);

            navigate('/player-scores');
        } catch (error) {
            console.error('Error submitting score:', error);
            setError('An error occurred while submitting your score.');
        }
    };

    const handleViewPlayerScores = () => {
        navigate('/player-scores'); 
    };

    return (
        <div>
            {quizEnded ? (
                <>
                    <h1>Quiz terminé !</h1>
                    <ScoreBoardComponent score={score} />
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={handleNameChange}
                        />
                        <button onClick={handleSubmitScore}>Submit Score</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </>
            ) : (
                <>
                    {currentQuestion ? (
                        <>
                            <ScoreBoardComponent score={score} />
                            <QuestionComponent question={currentQuestion} onAnswer={handleAnswerClick} />
                        </>
                    ) : (
                        <p>Loading question...</p>
                    )}
                </>
            )}
            <button onClick={handleViewPlayerScores}>Voir la Liste des Joueurs</button>
        </div>
    );
};

export default HomePage;
