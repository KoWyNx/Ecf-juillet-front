import React, { useState, useEffect } from 'react';
import { getPlayerScores } from '../api'; 
import '../PlayerScoresList.css'; 

const PlayerScoresList = () => {
    const [playerScores, setPlayerScores] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPlayerScores = async () => {
            try {
                const response = await getPlayerScores();
                const data = response.data; 

                console.log('Player scores fetched:', data);

                // Adapter la réponse selon la structure de données
                setPlayerScores(data.$values || []);
            } catch (error) {
                console.error('Error fetching player scores:', error);
                setError('Failed to fetch player scores');
            }
        };

        fetchPlayerScores();
    }, []);

    if (error) {
        return <div className="player-scores-error">{error}</div>; 
    }

    return (
        <div className="player-scores-container"> 
            <h1 className="player-scores-title">Liste des Joueurs et Scores</h1>
            <table className="player-scores-table"> 
                <thead>
                    <tr>
                        <th>Nom du Joueur</th>
                        <th>Score</th>
                        <th>Date</th> 
                    </tr>
                </thead>
                <tbody>
                    {playerScores.length > 0 ? (
                        playerScores.map((player, index) => (
                            <tr key={index}>
                                <td>{player.playerName}</td>
                                <td>{player.score}</td>
                                <td>{new Date(player.dateRecorded).toLocaleDateString()}</td> 
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Pas de joueur</td> 
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerScoresList;
