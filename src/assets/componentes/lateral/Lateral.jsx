import "./index.scss";
import { Link } from "react-router-dom";

function Lateral() {
  return (
    <>
      <main className="Lateral">
        <ul>
          <li>
            <p>
              <Link to={"/"}>
                <span className="NumeroMenu">01.</span> Intro
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/logotipo"}>
                <span className="NumeroMenu">02.</span> Logotipo
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/icones"}>
                <span className="NumeroMenu">03.</span> Ícone
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/tipografia"}>
                <span className="NumeroMenu">04.</span> Tipografia
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/cores"}>
                <span className="NumeroMenu">05.</span> Cores
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/imagens"}>
                <span className="NumeroMenu">06.</span> Imagens
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/gro"}>
                <span className="NumeroMenu">07.</span> Grö
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/iconografia"}>
                <span className="NumeroMenu">08.</span> Iconografia
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/botoes"}>
                <span className="NumeroMenu">09.</span> Botões
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/inputs"}>
                <span className="NumeroMenu">10.</span> Inputs
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/badges"}>
                <span className="NumeroMenu">11.</span> Badges e toggles
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/coressistema"}>
                <span className="NumeroMenu">12.</span> Cores sistema
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/modal"}>
                <span className="NumeroMenu">13.</span> Modais e alertas
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/charts"}>
                <span className="NumeroMenu">14.</span> Gráficos
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/identidadeverbal"}>
                <span className="NumeroMenu">15.</span> Identidade verbal
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/tagline"}>
                <span className="NumeroMenu">16.</span> Tagline
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/manifesto"}>
                <span className="NumeroMenu">17.</span> Manifesto
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to={"/exemplos"}>
                <span className="NumeroMenu">18.</span> Exemplos
              </Link>
            </p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default Lateral;
