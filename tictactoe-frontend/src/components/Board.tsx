import React, { FC } from 'react'

interface BoardProps {
  player1: string;
  player2: string;
  board: string[];
  currentTurn: string;
  roundFinished: boolean;
  results: string[];
  setBoard: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrentTurn: React.Dispatch<React.SetStateAction<string>>;
  handleContinue: () => void;
  handleStop: () => void;
}

const Board: FC<BoardProps> = ({
  player1,
  player2,
  board,
  currentTurn,
  roundFinished,
  results,
  setBoard,
  setCurrentTurn,
  handleContinue,
  handleStop,
}) => {
  const handleClick = (index) => {
    const newBoard = [...board]
    newBoard[index] = currentTurn
    setBoard(newBoard)
    setCurrentTurn(currentTurn === 'O' ? 'X' : 'O')
  }

  const renderSquare = (index) => (
    <button
      className="w-16 h-16 border border-gray-300 text-3xl font-semibold flex justify-center items-center"
      onClick={() => handleClick(index)}
      disabled={board[index] || roundFinished}
    >
      {board[index]}
    </button>
  )

  const renderResult = () => (
    <div className="flex w-full   mb-4 gap-10">
      <div
        className={
          'flex flex-1 flex-col items-start bg-gray-800 p-3' +
          (currentTurn === 'X' ? ' border' : '')
        }
      >
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
      <div
        className={
          'flex flex-1 flex-col bg-gray-800 items-start  p-3' +
          (currentTurn === 'O' ? ' border' : '')
        }
      >
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
    <div className="flex flex-col items-center mt-8">
      {renderResult()}

      <div className="grid grid-cols-3 gap-2">
        {board.map((_, index) => (
          <div key={index}>{renderSquare(index)}</div>
        ))}
      </div>

      {roundFinished && (
        <div className="flex items-center w-full justify-between mt-4">
          <button className="bg-blue-700" onClick={handleStop}>
            Stop
          </button>
          <button className="bg-blue-700" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}
    </div>
  )
}

export default Board
