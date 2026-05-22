import instagram from "../../imagens/icon_instagram.svg";
import linkedin from "../../imagens/icon_linkedin.svg";
import youtube from "../../imagens/icon_youtube.svg";
import "./index.scss";
import logo from "../../imagens/Logotipo_grownt_branca.svg";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="text">
          <p>Desenvolvido por</p>
          <img id="logo_rodape" src={logo} alt="Logo Grownt DS" />
        </div>
        <div className="redes">
          <a href="https://www.linkedin.com/company/growntbr/" target="_blank">
            <img src={linkedin} alt="Linkedin Grownt" />
          </a>
          <a href="https://www.instagram.com/grownt.tech/" target="_blank">
            <img src={instagram} alt="Instagram Grownt" />
          </a>
          <a href="https://www.youtube.com/@growntbr" target="_blank">
            <img src={youtube} alt="YouTube Grownt" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
