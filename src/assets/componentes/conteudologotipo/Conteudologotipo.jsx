import "./index.scss";
import React, { Component } from "react";
import logo from "../../imagens/Logotipo_grownt_laranja.svg";
import logoazulescuro from "../../imagens/Logotipo_grownt_azul_escuro.svg";
import logoazulclaro from "../../imagens/Logotipo_grownt_azul_claro.svg";
import logobege from "../../imagens/Logotipo_grownt_bege.svg";
import logocinza from "../../imagens/Logotipo_grownt_cinza.svg";
import logocinzaescuro from "../../imagens/Logotipo_grownt_cinza_escuro.svg";
import logopreto from "../../imagens/Logotipo_grownt_preto.svg";

function Conteudologotipo() {
  return (
    <>
      <div className="Conteudologotipo">
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Logotipo principal</p>
          </div>
          <div className="imagemlogo">
            <img src={logo} alt="Logo Gröwnt Laranja" />
          </div>
        </div>
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Logotipo secundário</p>
          </div>
          <div className="imagemlogo">
            <img src={logoazulescuro} alt="Logo Gröwnt Azul Escuro" />
          </div>
        </div>
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Logotipos terciários</p>
          </div>
          <div className="linhalogomenor">
            <div className="imagemlogomenor">
              <img src={logoazulclaro} alt="Logo Gröwnt Azul Claro" />
            </div>
            <div className="imagemlogomenor">
              <img src={logobege} alt="Logo Gröwnt Bege" />
            </div>
            <div className="imagemlogomenor">
              <img src={logocinza} alt="Logo Gröwnt Cinza" />
            </div>
          </div>
          <div className="linhalogomenor">
            <div className="imagemlogomenor">
              <img src={logocinzaescuro} alt="Logo Gröwnt Cinza Escuro" />
            </div>
            <div className="imagemlogomenor">
              <img src={logopreto} alt="Logo Gröwnt Preto" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudologotipo;
