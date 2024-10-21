import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

function RoundOverModal() {
  const { resetBoard } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  return (
    <>
      <ModalHeader>
        <Title >Kevin wins round!</Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle >Choices will be switched now.</Subtitle>
        <Subtitle >Kevin: 1</Subtitle>
        <Subtitle >Nompilo: 1</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#f9c811"
          onClick={() => {
            handleModal();
            resetBoard()
          }}
        >
          Continue
        </Button>
        <Button color="#00000099">Restart</Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
