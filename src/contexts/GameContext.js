import { createContext, useState } from "react";
import { genConfig } from "react-nice-avatar";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "x",
      name: "Player1",
      score: 0,
      color: "#ff2329",
      avatarConfig: genConfig(),
    },
    player2: {
      choice: "o",
      name: "Player2",
      score: 0,
      color: "#f9c811",
      avatarConfig: genConfig(),
    },
    turn: "x",
    roundWinner: "",
  });

  const updateBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
    });
  };

  const restartGame = () => {
    setGame({
      board: [null, null, null, null, null, null, null, null, null],
      player1: {
        choice: "x",
        name: "Player1",
        score: 0,
        color: "#ff2329",
        avatarConfig: genConfig(),
      },
      player2: {
        choice: "o",
        name: "Player2",
        score: 0,
        color: "#f9c811",
        avatarConfig: genConfig(),
      },
      turn: "x",
      roundWinner: "",
    });
  };

  const toggleChoice = (choice) => (choice === "x" ? "0" : "x");
  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...prevGame.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "x",
    }));
  };
  const updateScore = (winner) => {
    if (winner === "Draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: {
          ...prevGame.player1,
          score: prevGame.player1.score + 0.5,
        },
        player2: {
          ...prevGame.player2,
          score: prevGame.player2.score + 0.5,
        },
        roundWinner: "",
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: {
          ...prevGame[winner],
          score: prevGame[winner].score + 1,
        },
        roundWinner: prevGame[winner],
      }));
    }
  };
  const roundComplete = (result) => {
    if (game.turn === game.player1.choice && result !== "Draw") {
      console.log("Player 1 wins");
      updateScore("player1");
    } else if (game.turn === game.player2.choice && result !== "Draw") {
      console.log("Player 2 wins");
      updateScore("player2");
    } else {
      console.log("Draw");
      updateScore("Draw");
    }
    switchTurn();
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetBoard,
        roundComplete,
        restartGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
