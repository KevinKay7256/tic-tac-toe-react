import React, { useContext } from "react";
import CellStyle from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as IconXOutline } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconOOutline } from "../../assets/svgs/icon-o-outline.svg";

function GameCell({ cellItem, index }) {
  const { updateBoard, game } = useContext(GameContext);

  const cellClickHandler = () => {
<<<<<<< HEAD
    updateBoard(index)
    checkForWinner(game.board)
    
=======
    updateBoard(index);
    checkForWinner(game.board);

>>>>>>> dev
    // if(result) {

    // }
  };

  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {game.turn === "x" ? <IconXOutline className="outline_icon"/> : <IconOOutline className="outline_icon"/>}
    </CellStyle>
  );
}

export default GameCell;
