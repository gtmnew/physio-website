import "./Tratamentos.scss";

const Tratamentos = () => {
  return (
    <section className="treatment-container" id="tratamentos">
      <div className="treatment-title">
        <h1>TRATAMENTOS</h1>
        <h3>Poucas sessões, eficaz e acessível $$$ a todos!</h3>
      </div>
      <div className="treatment-content">
        <div className="treatment-description">
          <p>
            Trato coluna há mais de 18 anos sem o uso de remédios, o qual já
            beneficiou mais de <strong>32.000 pacientes</strong> candidatos à
            cirurgia.
          </p>
          <p>
            O tratamento é realizado através de movimentos cientificamente
            testados e comprovamos que descomprimirá a raiz nervosa da coluna,
            assim evitando o "pinçamento" e consequentemente a cirurgia para
            descompressão da coluna.
          </p>
        </div>
        <div className="treatment-benefits">
          <ul>
            <h3>Benefícios do tratamento</h3>
            <li>Alívio imediato da dor</li>
            <li>Tratamento não cirúrgico</li>
            <li>Diagnóstico da causa da dor</li>
            <li>Retorno rápido às atividades </li>
            <li>Método para todas as idades</li>
            <li>Independência do paciente</li>
          </ul>
        </div>
      </div>
      <div className="treatment-symptoms">
        <h2
          className="symptom-title
          "
        >
          Para quem é o tratamento?
        </h2>
        <div className="symptom-wrapper">
          <ul
            className="symptom-left
          "
          >
            <h3>Dor na lombar e nervo ciático</h3>
            <li>Dor e rigidez na coluna lombar;</li>
            <li>
              Dor e limitações de movimentos ao levantar da cama pela manhã;
            </li>
            <li>Dor em queimação, pontada ou choque na perna; </li>
            <li>Dormência nos dedos dos pés; </li>
            <li>Sensação de perna fraca;</li>
            <li>
              Dor que caminha na perna, ora está mais concentrada no glúteo, ora
              na panturrilha;
            </li>
            <li>Dor resistente à melhora com medicação e injeções; </li>
            <li>
              Recebeu Diagnóstico de hérnia de disco, protrusão, desgaste, nervo
              pinçado da coluna, artrose na coluna, bico de papagaio,
              espondilolistese, escorregamento de vértebra, protrusão de disco e
              outros.
            </li>
          </ul>

          <ul className="symptom-right">
            <h3>Dor na cervical, ombros e braços</h3>
            <li>Dor em queimação atrás do pescoço; </li>
            <li>
              Dor que pode irradiar para os ombros e braços - Sensação de peso e
              cansaço no pescoço e braços;
            </li>
            <li>
              Já tratou como tendinite e bursite do ombro mas não melhorou;
            </li>
            <li>
              Acorda diversas vezes de madrugada para encontrar uma nova posição
              de alívio de dor no braço;
            </li>
            <li>Sensação de nódulos de tensão muscular no pescoço; </li>
            <li>Dor resistente ao tratamento de fisioterapia convencional;</li>
            <li>Não tem melhora relevante com medicação;</li>
            <li>
              Diagnóstico de hérnia de disco cervical, protrusão, desgaste,
              artrose na coluna, bico de papagaio, espondilolistese,
              escorregamento de vértebra, nervo pinçado, protrusão de disco e
              outros.
            </li>
          </ul>
        </div>

        <div className="treatment-btn">
          <button>
            <a
              href="https://www.instagram.com/stories/highlights/17986702528537939/"
              target="_blank"
            >
              AGENDAR A MINHA CONSULTA
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tratamentos;
