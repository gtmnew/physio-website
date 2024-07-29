import Course from "../../assets/course.png";
import "./Sobre.scss";
import Navbar from "./../Navbar/Navbar";

const Sobre = () => {
  return (
    <section className="about-container" id="sobre">
      <Navbar />

      <div className="about-title">
        <h1>SOBRE</h1>
        <h3>Afinal, quem é Dr. Eduardo Magalhães? </h3>
      </div>
      <div className="about-content">
        <div className="about">
          <p>
            Sou Fisioterapeuta com experiência há mais de 18 anos, especializado
            no atendimento clínico de pacientes com dor na coluna, hérnia de
            disco, protrusão, artrose, desvios da coluna e outras condições
            ortopédicas as quais são tratadas e comprovadas cientificamente.
          </p>
        </div>
        <div className="img-wrapper"></div>
        <div className="about-infos">
          <ul>
            <h2>Formações</h2>
            <li>Pós-graduação na Santa Casa de São Paulo</li>
            <li>Pós-graduação no Esporte pela Unifesp</li>
            <li>Pós-graduação em Metodologia da Pesquisa Unifesp</li>
            <li>Pós-graduação em Metodologia da Pesquisa DOT/Unifesp</li>
            <li>
              Mestre pelo DOT - Departamento de Ortopedia e Traumatologia
              Unifesp
            </li>
          </ul>
          <ul>
            <h2>Cursos</h2>
            <li>Método FCR</li>
            <li>Conceito Maitland / Mulligan</li>
            <li>RPG</li>
            <li>Mobilização Neural</li>
            <li>Estabilização Segmentar</li>
            <li>Método Mackenzie</li>
          </ul>
        </div>
      </div>
      <div className="about-image">
        <img src={Course} alt="about-image" />
      </div>
    </section>
  );
};

export default Sobre;
