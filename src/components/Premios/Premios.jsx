import "./Premios.scss";
import { FaTrophy, FaCheck } from "react-icons/fa6";
import entrevista1 from "../../assets/entrevista1.png";
import entrevista2 from "../../assets/entrevista2.png";

const Premios = () => {
  return (
    <section className="prizes-container" id="premiações">
      <div className="prizes-title">
        <h1>Premiações</h1>
        <h3>Premiações e reconhecimentos obtidos através do meu trabalho:</h3>
      </div>
      <div className="prizes">
        <div className="all-prizes">
          <ul>
            <h3>Premiações</h3>
            <li>
              <FaTrophy className="icon-troph" /> Prêmio Quality Brasil - 2009;
            </li>
            <li>
              <FaTrophy className="icon-troph" /> Latin American Quality
              Institute (Cidade do México) - 2016 e 2020;
            </li>
            <li>
              <FaTrophy className="icon-troph" /> ANCEC - 2016, 2020, 2021 e
              2022.
            </li>
          </ul>
        </div>

        <div className="all-recognition">
          <ul>
            <h3>Reconhecimentos</h3>
            <li>
              <FaCheck className="icon-health" /> J Orthop Sports Phys Ther -
              2010 e 2012;
            </li>
            <li>
              <FaCheck className="icon-health" /> Int J Sports Phys Ther - 2014;
            </li>
            <li>
              <FaCheck className="icon-health" />
              Knee Surg Sports Traumatol Arthrosc - 2016.
            </li>
          </ul>
        </div>
      </div>
      <h1 className="interview-title">Entrevistas</h1>
      <div className="interviews-container">
        <div className="interviews-content">
          <div className="interview-1">
            <img src={entrevista1} alt="entrevista" />
            <div className="interview-description">
              <span>
                ANCEC/SP - Evento da Agência Nacional de Cultura, Empreendorismo
                e Comunicação
              </span>
              <a
                href="https://www.youtube.com/watch?v=1ETgxlQl8B4"
                target="_blank"
              >
                <button className="btn-interview">
                  Clique aqui para assistir
                </button>
              </a>
            </div>
          </div>
          <div className="interview-2">
            <img src={entrevista2} alt="entrevista" />
            <div className="interview-description">
              <span>TV Gazeta - Programa "Você Bonita"</span>

              <a
                href="https://www.tvgazeta.com.br/videos/alongamento-para-as-costas-110716/"
                target="_blank"
              >
                <button className="btn-interview">
                  Clique aqui para assistir
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premios;
