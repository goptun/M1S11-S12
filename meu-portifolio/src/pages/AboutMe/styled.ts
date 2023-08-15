import { styled } from "styled-components";

export const AboutMeStyled = styled.main`
  padding: 0em 3em 1em 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    font-size: 1.5em;
    line-height: 1.5;
    letter-spacing: -0.05em;
  }
  h3 {
    text-align: justify;
    line-height: 1.2;
    letter-spacing: 0em;
    margin-bottom: 16px;
    font-size: 1em;
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
