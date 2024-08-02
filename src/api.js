import axios from 'axios';

const API_URL = 'https://localhost:7014/api/quiz';


export const getAllQuestions = () => {
    return axios.get(`${API_URL}/questions`)
        .then(response => response.data.$values);
};


export const getQuestionById = (questionId) => {
    return axios.get(`${API_URL}/questions/${questionId}`);
};


export const submitPlayerScore = (scoreData) => {
    return axios.post(`${API_URL}/player-score`, scoreData);
};

export const getPlayerScores = () => {
    return axios.get(`${API_URL}/player-scores`)
};
