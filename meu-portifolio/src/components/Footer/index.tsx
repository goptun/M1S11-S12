import { FooterStyled, LinkStyled } from "./styled";
import { pages } from "../../data/pages";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <div className="footer-border" />
      </div>
      <ul>
        {pages.map(({ route, description }) => (
          <li key={description}>
            <LinkStyled to={route}>{description}</LinkStyled>
          </li>
        ))}
      </ul>
      <a href="#top">© 2023 | Matheus Ramos</a>
    </FooterStyled>
  );
}

export { Footer };
