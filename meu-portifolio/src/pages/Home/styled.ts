import { styled } from "styled-components";

export const HomeStyled = styled.main`
  background-image: url("./bg.gif");
  background-position: top center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3em;
  font-size: 2.5em;
  line-height: 1;
  // font-weight: 500;
  span {
    color: green;
  }
  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

export const SectionStyled = styled.section`
  padding: 2em 2em 0em 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 1em;
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
    padding: 1.3em;
    justify-content: center;
    align-items: center;
    font-size: 1em;
  }
`;
