import "./index.scss";
import { useState, useRef } from "react";

function Conteudomodal() {
  return (
    <>
      <div className="Conteudomodal">
        <div className="cardmodal">
          <div className="titulocardmodal">
            <h1 className="titulomodal">Biblioteca de modais</h1>
          </div>
          <div className="modal">
            <div className="subtitulomodal">
              <h2>Deseja deletar o arquivo?</h2>
            </div>
            <div className="botoesmodal">
              <button className="botaomodal">Sim</button>
              <button className="botaovermelho botaomodal">Não</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudomodal;
