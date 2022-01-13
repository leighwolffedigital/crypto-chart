import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  font-size: 20px;
  color: #121212;
  border-radius: 8px;
  padding 10px 20px;
  margin: auto 10px;
  border:#121212;
  background-color: ${(props) =>
    props.selected ? "rgba(51, 255, 138, 0.65)" : "#eeeeee"};
`;

export default StyledButton;
