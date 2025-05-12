import "./index.scss";
import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import Icon from "/icones/upload.svg";
import IconBranco from "/icones/uploadbranco.svg";
import IconAzul from "/icones/uploadazul.svg";
import iconfecharbranco from "/icones/fecharbranco.svg";
import iconfecharvermelho from "/icones/fecharvermelho.svg";

function Conteudobotoes() {
  const [Laranjahovered, setLaranjaHovered] = useState(false);
  const [Azulhovered, setAzulHovered] = useState(false);
  const [Brancohovered, setBrancoHovered] = useState(false);
  const [Cinzahovered, setCinzaHovered] = useState(false);
  const [Cinzaclarohovered, setCinzaclaroHovered] = useState(false);
  const [Vermelhohovered, setVermelhoHovered] = useState(false);
  return (
    <>
      <div className="Conteudobotoes">
        <div className="cardbotoes">
          <div className="titulocardbotoes">
            <h1 className="titulobotoes">Biblioteca de botões</h1>
          </div>
          <div className="titulobotao">
            <p>Botão Laranja</p>
          </div>
          <div className="exemplobotao">
            <button className="botaolaranja">
              Exemplo de botão laranja <img src={IconBranco} />
            </button>
            <button className="botaolaranja2">
              Exemplo de botão laranja <img src={IconBranco} />
            </button>
            <button
              className="botaobordalaranja"
              onMouseEnter={() => setLaranjaHovered(true)}
              onMouseLeave={() => setLaranjaHovered(false)}
            >
              {" "}
              {Laranjahovered ? (
                <>
                  Exemplo de botão borda laranja <img src={IconBranco} />
                </>
              ) : (
                <>
                  Exemplo de botão borda laranja <img src={Icon} />
                </>
              )}
            </button>
          </div>
          <div className="titulobotao">
            <p>Botão Azul</p>
          </div>
          <div className="exemplobotao">
            <button className="botaoazul">
              Exemplo de botão azul <img src={IconBranco} />
            </button>
            <button className="botaoazul2">
              Exemplo de botão azul <img src={IconBranco} />
            </button>
            <button
              className="botaobordaazul"
              onMouseEnter={() => setAzulHovered(true)}
              onMouseLeave={() => setAzulHovered(false)}
            >
              {" "}
              {Azulhovered ? (
                <>
                  Exemplo de botão borda azul <img src={IconBranco} />
                </>
              ) : (
                <>
                  Exemplo de botão borda azul <img src={IconAzul} />
                </>
              )}
            </button>
          </div>
          <div className="titulobotao">
            <p>Botão Branco</p>
          </div>
          <div className="exemplobotao">
            <button className="botaobranco3">
              Exemplo de botão branco <img src={IconAzul} />
            </button>
            <button
              className="botaobranco2"
              onMouseEnter={() => setBrancoHovered(true)}
              onMouseLeave={() => setBrancoHovered(false)}
            >
              {" "}
              {Brancohovered ? (
                <>
                  Exemplo de botão branco <img src={IconBranco} />
                </>
              ) : (
                <>
                  Exemplo de botão branco <img src={IconAzul} />
                </>
              )}
            </button>
            <button className="botaobranco">
              Exemplo de botão branco <img src={IconAzul} />
            </button>
          </div>
          <div className="titulobotao">
            <p>Botão Cinza</p>
          </div>
          <div className="exemplobotao">
            <button className="botaocinza2">
              Exemplo de botão cinza <img src={IconBranco} />
            </button>
            <button className="botaocinza3">
              Exemplo de botão cinza <img src={IconBranco} />
            </button>
            <button
              className="botaocinza"
              onMouseEnter={() => setCinzaHovered(true)}
              onMouseLeave={() => setCinzaHovered(false)}
            >
              {" "}
              {Cinzahovered ? (
                <>
                  Exemplo de botão cinza <img src={IconAzul} />
                </>
              ) : (
                <>
                  Exemplo de botão cinza <img src={IconBranco} />
                </>
              )}
            </button>
          </div>
          <div className="titulobotao">
            <p>Botão Cinza claro</p>
          </div>
          <div className="exemplobotao">
            <button className="botaocinzaclaro">
              Exemplo de botão cinza claro <img src={IconAzul} />
            </button>
            <button
              className="botaocinzaclaro2"
              onMouseEnter={() => setCinzaclaroHovered(true)}
              onMouseLeave={() => setCinzaclaroHovered(false)}
            >
              {" "}
              {Cinzaclarohovered ? (
                <>
                  Exemplo de botão cinza claro <img src={IconBranco} />
                </>
              ) : (
                <>
                  Exemplo de botão cinza claro <img src={IconAzul} />
                </>
              )}
            </button>
            <button className="botaocinzaclaro3">
              Exemplo de botão cinza claro <img src={IconAzul} />
            </button>
          </div>
          <div className="exemplobotao">
            <div className="titulobotao">
              <p>Botão Vermelho</p>
            </div>
            <button className="botaovermelho">
              Exemplo de botão vermelho <img src={iconfecharbranco} />
            </button>
            <button
              className="botaobordavermelho"
              onMouseEnter={() => setVermelhoHovered(true)}
              onMouseLeave={() => setVermelhoHovered(false)}
            >
              {" "}
              {Vermelhohovered ? (
                <>
                  Exemplo de botão vermelho <img src={iconfecharbranco} />
                </>
              ) : (
                <>
                  Exemplo de botão vermelho <img src={iconfecharvermelho} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudobotoes;
