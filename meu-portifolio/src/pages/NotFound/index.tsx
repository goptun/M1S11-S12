import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NotFoundStyled } from "./styled";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <NotFoundStyled>
        <h5>
          A página <span>não foi encontrada.</span>
        </h5>
        <h5>Quer voltar a página anterior?</h5>
        <div>
          <Button descriptionButton="Sim" onClick={() => navigate(-1)} />
        </div>
      </NotFoundStyled>
      <Footer />
    </>
  );
}

export { NotFound };
