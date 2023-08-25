import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Welcome from './Welcome';
import Inputs from './Inputs';
import Board from './Board';
import { API } from '../env';

export interface Session {
  player1: string;
  player2: string;
  results: string[];
}

const Game = () => {
  const [step, setStep] = useState('welcome');
  const [player1, setPlayer1] = useState(''); // X
  const [player2, setPlayer2] = useState(''); // O
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('X');
  const [roundFinished, setRoundFinished] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [previousSessions, setPreviousSessions] = useState<Session[]>([]);

  useEffect(() => {
    getPreviousSessions();
  }, []);

  useEffect(() => {
    let winner = calculateWinner(board);
    if (winner) {
      toast(JSON.stringify(winner));
      setRoundFinished(true);
      setResults([...results, winner]);
    }
  }, [board]);

  const getPreviousSessions = async () => {
    let res = await fetch(`${API}/sessions`);
    let data = await res.json();
    setPreviousSessions(data);
  };

  const handleContinue = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn('X');
    setRoundFinished(false);
  };

  const handleStop = async () => {
    const id = toast.loading('Saving...');
    await fetch('`${API}/sessions`', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player1, player2, results }),
    });
    toast.success('Saved', { id });
    getPreviousSessions();
    setStep('welcome');
  };

  const handlePlayerNames = (name1, name2) => {
    setPlayer1(name1);
    setPlayer2(name2);
    setStep('game');
  };

  return (
    <div>
      {step === 'welcome' && <Welcome setStep={setStep} previousSessions={previousSessions} />}
      {step === 'inputs' && <Inputs handlePlayerNames={handlePlayerNames} />}
      {step === 'game' && (
        <Board
          player1={player1}
          player2={player2}
          board={board}
          currentTurn={currentTurn}
          roundFinished={roundFinished}
          results={results}
          setBoard={setBoard}
          setCurrentTurn={setCurrentTurn}
          handleContinue={handleContinue}
          handleStop={handleStop}
        />
      )}
    </div>
  );
};


const calculateWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  
    for (const combo of winningCombos) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
  
    if (!board.some((a) => a === null)) return 'draw'
  
    return null
  }
  

export default Game;