import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #0052cc;
  padding: 1em;
  border: 0;
  border-radius: 9999px;

  &:hover {
    background-color: #004ab7;
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;
