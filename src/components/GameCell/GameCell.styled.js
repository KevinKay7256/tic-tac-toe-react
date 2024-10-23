import styled from "styled-components";

const CellStyle = styled.button`
  background-color: ${(props) => props.isWinningCell ? props.theme.colors.yellow : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  width: 8rem;
  height: 8rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px grey;
  cursor: pointer;

  &:hover {
    .outline_icon {
      path {
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 2;
      }
    }
  }
`;



export default CellStyle;
