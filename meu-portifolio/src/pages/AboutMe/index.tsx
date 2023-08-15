import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AboutMeStyled } from "../AboutMe/styled";

function AboutMe() {
  return (
    <>
      <Header />
      <AboutMeStyled>
        <h2>
          <span>Compromisso</span>
        </h2>
        <h3>
          Meu compromisso é com a <span>qualidade</span> e a{" "}
          <span>entrega</span> de um <span>produto</span> que atenda as{" "}
          <span>necessidades</span> do <span>cliente</span> e que seja{" "}
          <span>confiável</span> e <span>seguro</span>.
        </h3>
        <h2>
          <span>Trajetória</span>
        </h2>
        <h3>
          Ainda não tenho uma <span>longa trajetória</span> na área de{" "}
          <span>tecnologia</span>, mas desde que iniciei o curso de{" "}
          <span>Desenvolvimento Web</span> no <span>SENAI</span> venho me
          dedicando a <span>aprender</span> e <span>evoluir</span> cada vez mais
          na área.
        </h3>
        <h3>
          Estou focando meus estudos em <span>ReactJS</span> e{" "}
          <span>NodeJS</span>, mas também estou estudando{" "}
          <span>HTML, CSS e JavaScript</span> para ter uma base sólida.
        </h3>
      </AboutMeStyled>
      <Footer />
    </>
  );
}

export { AboutMe };
