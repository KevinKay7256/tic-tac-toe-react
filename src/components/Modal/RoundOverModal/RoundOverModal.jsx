import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";
import { SfxContext } from "../../../contexts/SfxContext";
import { useNavigate } from "react-router-dom";

function RoundOverModal() {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { hoverSfx, clickSfx, completedSfx } = useContext(SfxContext);
  const { handleModal } = useContext(ModalContext);

  const navigate = useNavigate();

  return (
    <>
      <ModalHeader>
        <Title>
          {game.roundWinner
            ? `${game.roundWinner.name} wins round!`
            : "Round Drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle>Choices will be switched now.</Subtitle>
        <Subtitle>
          {game.player1.name} : {game.player1.score}
        </Subtitle>
        <Subtitle>
          {game.player2.name}: {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            clickSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Continue
        </Button>
        <Button
          color="#00000099"
          onMouseEnter={() => hoverSfx()}
          onClick={() => {
            restartGame();
            handleModal();
            completedSfx();
            navigate("/");
          }}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
