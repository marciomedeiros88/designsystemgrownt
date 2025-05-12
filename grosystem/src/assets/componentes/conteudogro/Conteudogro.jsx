import "./index.scss";
import imagem001 from "../../imagens/gro/001.jpg";
import imagem002 from "../../imagens/gro/002.jpg";
import imagem003 from "../../imagens/gro/003.jpg";
import imagem004 from "../../imagens/gro/004.jpg";
import imagem005 from "../../imagens/gro/005.jpg";
import imagem006 from "../../imagens/gro/006.jpg";
import imagem007 from "../../imagens/gro/007.jpg";
import imagem008 from "../../imagens/gro/008.jpg";
import imagem009 from "../../imagens/gro/009.jpg";

function Conteudogro() {
  return (
    <>
      <div className="Conteudogro">
        <div className="cardgro">
          <div className="titulocardiicone">
            <h1 className="tituloimagensgro">Imagens da Grö</h1>
          </div>
          <div className="listaimagensgro">
            <div className="imagemgro">
              <img src={imagem001} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem002} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem003} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem004} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem005} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem006} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem007} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem008} alt="Exemplo imagem Grö" />
            </div>
            <div className="imagemgro">
              <img src={imagem009} alt="Exemplo imagem Grö" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudogro;
