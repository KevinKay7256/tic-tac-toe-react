import styled from "styled-components";

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 20px;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.secondary};
`