import "./index.scss";
import React, { Component, useState } from "react";
import { motion } from "framer-motion";
import Icon from "/icones/upload.svg";
import IconChatBranco from "/icones/chatbranco.svg";
import IconChatVermelho from "/icones/chatvermelho.svg";
import IconChatAzulClaro from "/icones/chatazulclaro.svg";
import IconChatLilas from "/icones/chatlilas.svg";
import IconChatVerde from "/icones/chatverde.svg";
import IconChatAmarelo from "/icones/chatamarelo.svg";
import IconAlertaBranco from "/icones/alertabranco.svg";
import IconAlertaVermelho from "/icones/alertavermelho.svg";
import IconAlertaAzulClaro from "/icones/alertaazulclaro.svg";
import IconAlertaLilas from "/icones/alertalilas.svg";
import IconAlertaVerde from "/icones/alertaverde.svg";
import IconAlertaAmarelo from "/icones/alertaamarelo.svg";

function Conteudobadges() {
  const [Laranjahovered, setLaranjaHovered] = useState(false);
  const [Azulhovered, setAzulHovered] = useState(false);
  const [Brancohovered, setBrancoHovered] = useState(false);
  const [Cinzahovered, setCinzaHovered] = useState(false);
  const [Cinzaclarohovered, setCinzaclaroHovered] = useState(false);
  const [Vermelhohovered, setVermelhoHovered] = useState(false);

  return (
    <>
      <div className="Conteudobadges">
        <div className="cardbadges">
          <div className="titulocardbadges">
            <h1 className="titulobadges">Biblioteca de badges</h1>
          </div>
          <div className="titulobadges">
            <p>Status de sistema</p>
          </div>
          <div className="exemplobadge">
            <button className="badgeverde">Aprovado</button>
            <button className="badgeverde">Prazo longo</button>
            <button className="badgeamarelo">Em andamento</button>
            <button className="badgeamarelo">Atenção</button>
            <button className="badgevermelho">Cancelado</button>
            <button className="badgevermelho">Crítico</button>
            <button className="badgevermelhoescuro50">Reprovado</button>
            <button className="badgeazul">Pendente</button>
            <button className="badgelilas">Em aprovação</button>
            <button className="badgelilas">Em análise</button>
          </div>
        </div>
        <div className="cardbadges">
          <div className="titulocardbadges">
            <h1 className="titulobadges">Biblioteca de chips</h1>
          </div>
          <div className="titulobadges">
            <p>Chips de sistema</p>
          </div>
          <div className="exemplobadge">
            <button className="chipverde">
              <img src={IconChatVerde} />
            </button>
            <button className="chipamarelo">
              <img src={IconChatAmarelo} />
            </button>
            <button className="chipvermelho">
              <img src={IconChatVermelho} />
            </button>
            <button className="chipazul">
              <img src={IconChatAzulClaro} />
            </button>
            <button className="chiplilas">
              <img src={IconChatLilas} />
            </button>
            <button className="chipverde">
              <img src={IconAlertaVerde} />
            </button>
            <button className="chipamarelo">
              <img src={IconAlertaAmarelo} />
            </button>
            <button className="chipvermelho">
              <img src={IconAlertaVermelho} />
            </button>
            <button className="chipazul">
              <img src={IconAlertaAzulClaro} />
            </button>
            <button className="chiplilas">
              <img src={IconAlertaLilas} />
            </button>
          </div>
        </div>
        <div className="cardbadges">
          <div className="titulocardbadges">
            <h1 className="titulobadges">Biblioteca de toggles</h1>
          </div>
          <div className="titulobadges">
            <p>Toggles switchs</p>
          </div>
          <div className="exemplotoggle">
            <label className="switch">
              <input type="checkbox"></input>
              <span className="sliderverde round"></span>
            </label>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slideramarelo round"></span>
            </label>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slidervermelho round"></span>
            </label>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="sliderazul round"></span>
            </label>
            <label className="switch">
              <input type="checkbox"></input>
              <span className="sliderlilas round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudobadges;
