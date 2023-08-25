import React, { FC } from 'react'
import { Session } from './Game';

interface WelcomeProps {
  setStep: React.Dispatch<React.SetStateAction<string>>;
  previousSessions: Session[]; // Update this with the correct data type
}

const Welcome: FC<WelcomeProps> = ({ setStep, previousSessions }) => {
  const renderSession = ({ player1, player2, results }: Session) => (
    <div className="flex w-full   mb-4 gap-10 bg-gray-700 p-4">
      <div className="flex flex-1 flex-col items-start bg-gray-800 p-3">
        <span className="text-gray-50 mb-2">
          {player1} {'(X)'}
        </span>
        <div className="flex items-center justify-between w-full">
          <span className=" rounded-full">Wins</span>
          <span>{results.filter((w) => w === 'X').length}</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className=" rounded-full">Loses</span>
          <span>{results.filter((w) => w !== 'X' && w !== 'draw').length}</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className=" rounded-full">Draws</span>
          <span>{results.filter((w) => w === 'draw').length}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-gray-800 items-start  p-3">
        <span className="text-gray-50 mb-2">
          {player2} {'(O)'}
        </span>
        <div className="flex items-center justify-between w-full">
          <span className="rounded-full ">Wins</span>
          <span>{results.filter((w) => w === 'O').length}</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="rounded-full ">Loses</span>
          <span>{results.filter((w) => w !== 'O' && w !== 'draw').length}</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className=" rounded-full">Draws</span>
          <span>{results.filter((w) => w === 'draw').length}</span>
        </div>
      </div>
    </div>
  )

  
  return (
    <>
      <h1>Tick Tac Toe</h1>
      <div className="card">
        <button className="bg-blue-700" onClick={() => setStep('inputs')}>
          Start new game
        </button>
      </div>
      <span className="mb-3 self-start">Previous sessions</span>
      <div className="flex flex-col gap-4">
        {previousSessions.map(renderSession)}
      </div>
    </>
  )
}

export default Welcome
