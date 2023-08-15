import { styled } from "styled-components";

export const AboutMeStyled = styled.main`
  padding: 0em 3em 1em 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    font-size: 2 em;
    line-height: 1.3;
    letter-spacing: -0.05em;
  }
  h3 {
    text-align: justify;
    line-height: 1.2;
    letter-spacing: -0.09em;
    margin-bottom: 16px;
  }
  span {
    color: green;
  }
  @media (max-width: 580px) {
    padding: 3em;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    h2 {
      padding: 1rem;
      text-align: center;
    }
  }
`;
