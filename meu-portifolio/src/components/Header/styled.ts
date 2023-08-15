import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: sticky;
  top: 0px;

  display: grid;
  grid-template-columns: 2fr 1fr;

  width: 100%;
  height: 80px;


  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0 0.5rem 0 2em;
  }

  nav {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    margin: 0 1em;
  }

  li:hover {
    color: #fff;
    transform: scale(1.1);
    transition: transform 0.5s;
  }

  img:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }

  div p:hover {
    transform: scale(1.03);
    transition: transform 0.8s;
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 2fr 1fr;

`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
