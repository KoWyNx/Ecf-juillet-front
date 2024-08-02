// src/components/PlayerScoresList.js
import React, { useState, useEffect } from 'react';
import { getPlayerScores } from '../api';

const PlayerScoresList = () => {
    const [playerScores, setPlayerScores] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPlayerScores = async () => {
            try {
                const response = await getPlayerScores();
                setPlayerScores(response.data);
            } catch (error) {
                console.error('Error fetching player scores:', error);
                setError('Error fetching player scores');
            }
        };

        fetchPlayerScores();
    }, []);

    return (
        <div>
            <h1>Liste des Joueurs et Scores</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Nom du Joueur</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {playerScores.map((player, index) => (
                        <tr key={index}>
                            <td>{player.playerName}</td>
                            <td>{player.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerScoresList;
