import "./App.scss";

import Sobre from "./components/Sobre/Sobre";
import Tratamentos from "./components/Tratamentos/Tratamentos";
import Premios from "./components/Premios/Premios";
import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
function App() {
  return (
    <div>
      <Sobre />
      <Tratamentos />
      <Premios />
      <Testimonials />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
