import { GlobalStyles } from "./styles/global-styles";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <p style={{ textAlign: "center" }}>Rodapé</p>
      <Footer />
    </>
  );
}

export default App;
