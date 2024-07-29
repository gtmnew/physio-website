import { useState } from "react";
import "./Navbar.scss";
import { LiaCircleSolid } from "react-icons/lia";
import { IoIosLeaf } from "react-icons/io";
import { PiHeartThin } from "react-icons/pi";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div className="navbar-container" id="sobre">
        <div>
          <a href="#sobre" onClick={() => setShowNav(false)} className="logo">
            <div className="logo-container">
              <LiaCircleSolid className="circle-icon" />
              <IoIosLeaf className="leaf-icon" />
              <PiHeartThin className="heart-icon" />
              <div className="sigla">
                <span>IEM</span>
              </div>
            </div>

            <div className="logo-content">
              <div className="instituto">
                <h3>INSTITUTO EDUARDO MAGALHÃES</h3>
                <h5>Tratamento para a Coluna Vertebral sem cirurgia</h5>
              </div>
              <div className="crefito">
                <h5>CREFITO-3 / 134.051-F</h5>
              </div>
            </div>
          </a>
        </div>
        <div className="menu-links">
          <ul className={`${showNav ? "show" : ""}`}>
            <li onClick={() => setShowNav(false)}>
              <a href="#sobre">Sobre</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#tratamentos">Tratamentos</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#premiações">Premiações</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#depoimentos">Depoimentos</a>
            </li>
            <li onClick={() => setShowNav(false)}>
              <a href="#contatos">Contatos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
