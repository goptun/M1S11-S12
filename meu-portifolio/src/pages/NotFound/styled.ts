import { styled } from "styled-components";

export const NotFoundStyled = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 5.5em;
  font-size: 2em;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.05em;
  span {
    color: green;
  }
  div {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }
  Button {
    width: 200px;
    color: #fff;
    background-color: green;
  }

  Button:hover {
    color: #fff;
    background-color: green;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    padding: 1em;
    Button {
      width: 100px;
      height: 50px;
    }
  }
`;
