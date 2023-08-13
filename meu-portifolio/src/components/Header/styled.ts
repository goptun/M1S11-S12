import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 0rem;
  position: sticky;
  display: grid;
  grid-template-columns: 1fr;

  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.5);

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
    width: 100%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 1em;
  }

  li {
    list-style: none;
    margin: 0 1em;
  }
`;
