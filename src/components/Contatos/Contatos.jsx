import "./Contatos.scss";
import { FaSquareInstagram } from "react-icons/fa6";

const Contatos = () => {
  return (
    <section className="contact-container" id="contatos">
      <div className="contact-title">
        <h1>CONTATOS</h1>
        <h3>Todas as informações necessárias estão abaixo:</h3>
      </div>

      <div className="local-infos">
        <div className="address">
          <h3>Endereço:</h3>
          <span className="address-text">
            R. Dr. Tirso Martins, 44 - Vila Mariana, São Paulo - SP, 04120-050{" "}
            <br />
            <span className="address-local"> Delta Centro Empresarial</span>
          </span>
          <div className="telephones">
            <ul>
              <h3>Telefones:</h3>
              <li>☎️ (011) 5575-5862</li>
              <li>☎️ (011) 5539-1770</li>
            </ul>

            <div className="btn-container">
              <button className="instagram-btn">
                <div className="icon-container">
                  <FaSquareInstagram className="icon" />
                </div>
                <a
                  href="https://www.instagram.com/dr.eduardomagalhaes/"
                  target="_blank"
                >
                  <span>ME SIGA NO INSTAGRAM!</span>
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="map">
          <h3>Google Maps:</h3>
          <iframe
            title="Mapa do Google"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14624.943840981065!2d-46.6362172!3d-23.5958691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2de4a88583%3A0x86b31d5f3e3c6c7!2sInstituto%20Eduardo%20Magalh%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1715905275384!5m2!1spt-BR!2sbr"
            width="400"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
