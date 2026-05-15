import "./index.scss";
import React, { Component } from "react";
import icone from "../../imagens/icone_grownt_laranja.svg";
import iconeazulescuro from "../../imagens/icone_grownt_azul_escuro.svg";
import iconeazulclaro from "../../imagens/icone_grownt_azul_claro.svg";
import iconebege from "../../imagens/icone_grownt_bege.svg";
import iconecinza from "../../imagens/icone_grownt_cinza.svg";
import iconeazulmedio from "../../imagens/icone_grownt_azul_medio.svg";
import info from "/icones/infocinza.svg";

function Conteudoicone() {
  return (
    <>
      <div className="Conteudologotipo">
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Ícone principal</p>
          </div>
          <div className="imagemlogo">
            <img src={icone} alt="Ícone Grownt Laranja" />
          </div>
        </div>
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Ícone secundário</p>
          </div>
          <div className="imagemlogo">
            <img src={iconeazulescuro} alt="Ícone Grownt Azul Escuro" />
          </div>
        </div>
        <div className="cardlogotipo">
          <div className="titulocard">
            <p className="titulologotipo">Ícones terciários</p>
          </div>
          <div className="linhalogomenor">
            <div className="imagemlogomenor">
              <img src={iconeazulclaro} alt="Ícone Grownt Azul Claro" />
            </div>
            <div className="imagemlogomenor">
              <img src={iconebege} alt="Logo Grownt Bege" />
            </div>
          </div>
          <div className="linhalogomenor">
            <div className="imagemlogomenor">
              <img src={iconecinza} alt="Ícone Grownt Cinza" />
            </div>
            <div className="imagemlogomenor">
              <img src={iconeazulmedio} alt="Ícone Grownt Azul Médio" />
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
                Não mudar as cores do ícone.{" "}
                <strong>
                  As únicas cores que podemos aplicar o ícone são as que estão
                  nesta página, além das versões em preto e em branco, para
                  qualquer outra cor não é autorizado o uso/alteração.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudoicone;
