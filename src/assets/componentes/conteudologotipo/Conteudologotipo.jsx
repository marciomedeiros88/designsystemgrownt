import "./index.scss";
import React, { Component } from "react";
import logo from "../../imagens/Logotipo_grownt_laranja.svg";
import logoazulescuro from "../../imagens/Logotipo_grownt_azul_escuro.svg";
import logoazulclaro from "../../imagens/Logotipo_grownt_azul_claro.svg";
import logobege from "../../imagens/Logotipo_grownt_bege.svg";
import logocinza from "../../imagens/Logotipo_grownt_cinza.svg";
import logocinzaescuro from "../../imagens/Logotipo_grownt_cinza_escuro.svg";
import logopreto from "../../imagens/Logotipo_grownt_preto.svg";
import info from "/icones/infocinza.svg";

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
        <div className="cardlogotipo">
          <div className="info cinzaclarogrownt">
            <div className="iconeinformacao">
              <img src={info} />
            </div>
            <div className="subtitulomodal">
              <h3>Atenção!</h3>
            </div>
            <div className="paragrafoinfo">
              <p>
                Não mudar as cores do logotipo.{" "}
                <strong>
                  As únicas cores que podemos aplicar o logotipo são as que
                  estão nesta página, além das versões em preto e em branco,
                  para qualquer outra cor não é autorizado o uso/alteração.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudologotipo;
