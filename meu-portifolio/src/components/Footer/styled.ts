import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStyled = styled.footer`
  width: 100%;
  margin-top: 2em;
  padding-bottom: 1em;
  bottom: 0;

  div {
    width: 100%;
    border: 1px solid #fff;
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
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #ffff;
    margin: 1em 4em;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
