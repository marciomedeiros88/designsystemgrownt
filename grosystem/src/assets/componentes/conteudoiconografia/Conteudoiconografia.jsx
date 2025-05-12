import "./index.scss";
import React, { Component } from "react";
import icone from "../../imagens/icone_grownt_laranja.svg";
import iconeazulescuro from "../../imagens/icone_grownt_azul_escuro.svg";
import iconeazulclaro from "../../imagens/icone_grownt_azul_claro.svg";
import iconebege from "../../imagens/icone_grownt_bege.svg";
import iconecinza from "../../imagens/icone_grownt_cinza.svg";
import iconeazulmedio from "../../imagens/icone_grownt_azul_medio.svg";

import Cardicones from "../conteudoiconografia/Cardicones";

import { listaicones } from "./listaicones.js"
import { listaiconesazul } from "./listaiconesazul.js"

function Conteudoiconografia() {

    const lista = {listaicones};
    console.log(lista)
  return (
    <>
      <div className="Conteudoiconografia">
        <div className="cardicones">
          <div className="titulocardicones">
            <h1 className="tituloicones">Biblioteca de ícones</h1>
          </div>
          <div className="imagensicones">
            {listaicones.map((icon) => (<Cardicones key={icon.id} data={icon}/>))}
          </div>
          <div className="imagensicones">
            {listaiconesazul.map((iconazul) => (<Cardicones key={iconazul.id} data={iconazul}/>))}
          </div>

        </div>
        
      </div>
    </>
  );
}

export default Conteudoiconografia;
