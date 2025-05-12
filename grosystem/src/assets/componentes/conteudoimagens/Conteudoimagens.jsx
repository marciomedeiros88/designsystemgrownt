import "./index.scss";
import imagem001 from "../../imagens/001.jpg";
import imagem002 from "../../imagens/002.jpg";
import imagem003 from "../../imagens/003.jpg";
import imagem004 from "../../imagens/004.jpg";
import imagem005 from "../../imagens/005.jpg";
import imagem006 from "../../imagens/006.jpg";
import imagem007 from "../../imagens/007.jpg";
import imagem008 from "../../imagens/008.jpg";
import imagem009 from "../../imagens/009.jpg";


function Conteudoimagens() {
    return (
      <>
        <div className="Conteudoimagens">
          <div className="cardimagens">
            <div className="titulocardiicone">
              <h1 className="tituloimagens">Imagens de referência</h1>
            </div>
            <div className="listaimagens">
            <div className="imagem">
              <img src={imagem001} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem002} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem003} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem004} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem005} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem006} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem007} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem008} alt="Exemplo imagem Gröwnt" />
            </div>
            <div className="imagem">
              <img src={imagem009} alt="Exemplo imagem Gröwnt" />
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Conteudoimagens;
  