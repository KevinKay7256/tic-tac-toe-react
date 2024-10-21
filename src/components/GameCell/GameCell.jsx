import React, { useContext } from "react";
import CellStyle from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/icon-x.svg";
import { ReactComponent as IconO } from "../../assets/svgs/icon-o.svg";
import { ReactComponent as IconXOutline } from "../../assets/svgs/icon-x-outline.svg";
import { ReactComponent as IconOOutline } from "../../assets/svgs/icon-o-outline.svg";

function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete()
      handleModal(<RoundOverModal />);
    }

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
      {game.turn === "x" ? (
        <IconXOutline className="outline_icon" />
      ) : (
        <IconOOutline className="outline_icon" />
      )}
    </CellStyle>
  );
}

export default GameCell;
