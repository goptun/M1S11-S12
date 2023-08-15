import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeStyled, SectionStyled } from "../Home/styled";

function Home() {
  return (
    <>
      <Header />
      <HomeStyled>
        <h2>
          web_<span>developer</span>
        </h2>
      </HomeStyled>
      <SectionStyled>
        <h3>
          Sou <span>Desenvolvedor Full Stack</span> com foco em{" "}
          <span>Front-end</span> e <span>Back-end</span> utilizando{" "}
          <span>ReactJS</span> e <span>NodeJS</span> para desenvolvimento de
          aplicações web e mobile.
        </h3>
        <h3>
          Tenho experiência em <span>análise de dados</span>,{" "}
          <span>negócios</span>, <span>implantação de projetos</span>, além de{" "}
          <span>desenvolvimento web</span>, me permitindo uma visão técnica e
          objetiva de todo o{" "}
          <span>processo de desenvolvimento de projetos.</span>
        </h3>
        <h3>
          Atualmente estou em busca de uma oportunidade para desenvolver e
          aprimorar minhas habilidades em <span>desenvolvimento web</span> e{" "}
          <span>análise de dados</span>.
        </h3>
      </SectionStyled>
      <Footer />
    </>
  );
}

export default Home;
