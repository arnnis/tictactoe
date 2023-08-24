import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Inputs = ({ handlePlayerNames }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleContinue = () => {
    if (!player1Name || !player2Name) {
      toast.error('Please enter players names');
      return;
    }
    handlePlayerNames(player1Name, player2Name);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Player 1"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => setPlayer1Name(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => setPlayer2Name(e.target.value)}
      />
      <button
        className="bg-blue-700"
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Inputs;