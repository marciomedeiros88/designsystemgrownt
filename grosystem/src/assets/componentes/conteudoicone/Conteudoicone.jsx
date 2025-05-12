import "./index.scss";
import React, { Component } from "react";
import icone from "../../imagens/icone_grownt_laranja.svg";
import iconeazulescuro from "../../imagens/icone_grownt_azul_escuro.svg";
import iconeazulclaro from "../../imagens/icone_grownt_azul_claro.svg";
import iconebege from "../../imagens/icone_grownt_bege.svg";
import iconecinza from "../../imagens/icone_grownt_cinza.svg";
import iconeazulmedio from "../../imagens/icone_grownt_azul_medio.svg";

function Conteudoicone() {
  return (
    <>
      <div className="Conteudologotipo">
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Ícone principal</p>
          </div>
          <div className="imagemlogo">
            <img src={icone} alt="Ícone Gröwnt Laranja" />
          </div>
        </div>
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Ícone secundário</p>
          </div>
          <div className="imagemlogo">
            <img src={iconeazulescuro} alt="Ícone Gröwnt Azul Escuro" />
          </div>
        </div>
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Ícones terciários</p>
          </div>
          <div className="linhalogomenor">
            <div className="imagemlogomenor">
              <img src={iconeazulclaro} alt="Ícone Gröwnt Azul Claro" />
            </div>
            <div className="imagemlogomenor">
              <img src={iconebege} alt="Logo Gröwnt Bege" />
            </div>
          </div>
          <div className="linhalogomenor">
            <div className="imagemlogomenor">
              <img src={iconecinza} alt="Ícone Gröwnt Cinza" />
            </div>
            <div className="imagemlogomenor">
              <img src={iconeazulmedio} alt="Ícone Gröwnt Azul Médio" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudoicone;
