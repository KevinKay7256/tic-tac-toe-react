import styled from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !["columnbased"].includes(prop),
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnbased ? "column" : "row")};
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1.5rem;
  text-align: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 35px;
  font-family: "Pacifico", cursive;
  background-color: transparent;

  ${(props) => props.theme.media.mobile} {
    font-size: 3.3rem;
  }
`;

export const Subtitle = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 17px;
  font-weight: 200;
  background-color: transparent;
  padding: 10px;
`;

export const Text = styled.p`
  color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.text};
  font-size: 24px;
  background-color: transparent;
  padding: 10px;
`;
