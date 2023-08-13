import { FooterStyled } from "./styled";

function Footer() {
  return (
    <FooterStyled>
      <div className="footer" />
      <ul>
        <li>Início</li>
        <li>Portifólio</li>
        <li>Sobre</li>
      </ul>
      <a href="#top">© 2023 | Matheus Ramos</a>
    </FooterStyled>
  );
}

export { Footer };
