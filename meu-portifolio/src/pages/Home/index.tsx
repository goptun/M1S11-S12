import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

function Home() {
  return (
    <>
      <Header />
      <p style={{ height: "40vh", margin: "1em" }}>
        <Button descriptionButton="Teste" />
      </p>
      <Footer />
    </>
  );
}

export default Home;
