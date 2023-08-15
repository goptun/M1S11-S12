import { styled } from "styled-components";

export const PortfolioStyled = styled.main`
  padding: 3rem 3em 1em 3em;
  text-align: center;
  font-size: 2rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  li {
    list-style: none;
  }
  div,
  h5,
  h6,
  a,
  p,
  span {
    color: #fff;
    background-color: darkgreen;
  }
  div {
    width: 80vw;
    height: 100%;
    padding-bottom: 10%;
    border-radius: 10px;
    margin: 15px;
  }
  img {
    margin-top: 1em;
    width: 10em;
    height: 6em;
    border-radius: 10px;
  }

  h6 {
    font-size: medium;
    padding: 1rem 1rem;
  }
  a {
    font-size: large;
    padding: 1em;
    text-decoration: none;
  }

  p {
    margin: 0 0 1em 0;
  }
  p:hover {
    transform: scale(1.02);
    transition: transform 0.8s;
  }
  a:hover {
    color: #fff;
  }
  @media (max-width: 580px) {
    padding: 0;
    text-align: center;
    font-size: small;
    margin: 5em 0 15em 0;
    ul {
      display: flex;
      text-align: center;
    }
    div {
      width: 80vw;
      height: 40vh;
      padding-bottom: 10%;
      border-radius: 10px;
      margin: 15px;
    }
    a {
      font-size: small;
      padding: 0;
      text-decoration: none;
    }

    p {
      margin: 0 0 2em 0;
    }
    h5 {
      margin: 1em;
      font-size: large;
    }
    h6 {
      font-size: 12px;
    }
  }
`;
