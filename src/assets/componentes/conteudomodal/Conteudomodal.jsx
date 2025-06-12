import "./index.scss";
import { useState, useRef } from "react";
import fechar from "/icones/fecharcinza.svg";
import info from "/icones/infocinza.svg";

function Conteudomodal() {
  return (
    <>
      <div className="Conteudomodal">
        <div className="cardmodal">
          <div className="titulocardmodal">
            <h1 className="titulomodal">Biblioteca de modais</h1>
          </div>
          <div className="cardsmodal">
            <div className="modal">
              <div className="subtitulomodal">
                <h2>Confirme para alterar sua senha</h2>
              </div>
              <div className="botoesmodal">
                <button className="botaomodal">Sim</button>
                <button className="botaovermelho botaomodal">Não</button>
              </div>
            </div>
            <div className="modal">
              <div className="fechar">
                <img src={fechar} />
              </div>
              <div className="subtitulomodal">
                <h2>Enviar arquivo</h2>
              </div>
              <div className="areainput">
                <div className="exemploinput">
                  <input type="file" name="select" className="input" />
                </div>
              </div>
              <div className="botoesmodal">
                <button className="botaomodal">Enviar</button>
              </div>
            </div>
            <div className="info cinzaclarogrownt">
              <div className="iconeinformacao">
                <img src={info} />
              </div>
              <div className="subtitulomodal">
                <h3>Atenção!</h3>
              </div>
              <div className="paragrafoinfo">
                <p>
                  Não incluir opções redundantes.{" "}
                  <strong>
                    Ao usar o ícone de fechar, não se deve utilizar a opção Não
                    ou Cancelar.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cardmodal">
          <div className="cardsmodal">
            <div className="modal">
              <div className="fechar">
                <img src={fechar} />
              </div>
              <div className="subtitulomodal">
                <h2>Fazer login</h2>
              </div>
              <div className="areainput">
                <div className="tituloinput">
                  <label>Email</label>
                </div>
                <div className="exemploinput">
                  <input
                    type="email"
                    className="input"
                    value="Digite seu email"
                  />
                </div>
              </div>
              <div className="areainput">
                <div className="tituloinput">
                  <label>Senha</label>
                </div>
                <div className="exemploinput">
                  <input
                    type="password"
                    className="input"
                    value="Digite sua senha"
                  />
                </div>
              </div>
              <div className="botoesmodal">
                <button className="botaomodal">Entrar</button>
                <button className="botaovermelho botaomodal">Cancelar</button>
              </div>
              <div className="subtitulomodal">
                <p className="botao">Esqueci minha senha</p>
              </div>
              <div className="subtitulomodal">
                <p className="botao">Meu primeiro acesso</p>
              </div>
            </div>
            <div className="modal">
              <div className="subtitulomodal">
                <h2>Deletar arquivo?</h2>
              </div>
              <div className="subtitulomodal">
                <p className="botao">
                  Ao deletar o arquivo,{" "}
                  <strong>não há como recuperá-lo posteriormente.</strong>
                </p>
              </div>

              <div className="botoesmodal">
                <button className="botaomodal">Sim</button>
                <button className="botaovermelho botaomodal">Não</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudomodal;
