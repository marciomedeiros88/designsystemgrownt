import logo from "../../imagens/grownt_design_system.svg";
import "./index.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="Header">
        <img src={logo} alt="Logo Grownt DS" />
        <p>Design System da Grownt</p>
      </header>
    </>
  );
}

export default Header;
