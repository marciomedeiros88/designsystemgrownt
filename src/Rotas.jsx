//--COMPONENTES

import Home from "./assets/componentes/home/Home";
import Logotipo from "./assets/componentes/logotipo/Logotipo";
import Tipografia from "./assets/componentes/tipografia/Tipografia";
import Cores from "./assets/componentes/cores/Cores";
import Coressistema from "./assets/componentes/coressistema/Coressistema";
import Icones from "./assets/componentes/icones/Icones";
import Imagens from "./assets/componentes/imagens/Imagens";
import Iconografia from "./assets/componentes/iconografia/Iconografia";
import Botoes from "./assets/componentes/botoes/Botoes";
import Inputs from "./assets/componentes/inputs/Inputs";
import Gro from "./assets/componentes/gro/Gro";
import Badges from "./assets/componentes/badges/Badges";
import Modal from "./assets/componentes/modal/Modal";
import Graficos from "./assets/componentes/graficos/Graficos";
import Identidadeverbal from "./assets/componentes/identidadeverbal/Identidadeverbal";
import Tagline from "./assets/componentes/tagline/Tagline";
import Manifesto from "./assets/componentes/manifesto/Manifesto";
import Exemplos from "./assets/componentes/exemplos/Exemplos";

//--CSS

import "./index.css";

//--REACT HOOKS

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useOutlet,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { AnimatePresence } from "framer-motion";

function Rotas() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/logotipo" element={<Logotipo />} />
          <Route exact path="/tipografia" element={<Tipografia />} />
          <Route exact path="/cores" element={<Cores />} />
          <Route exact path="/icones" element={<Icones />} />
          <Route exact path="/imagens" element={<Imagens />} />
          <Route exact path="/gro" element={<Gro />} />
          <Route exact path="/iconografia" element={<Iconografia />} />
          <Route exact path="/botoes" element={<Botoes />} />
          <Route exact path="/inputs" element={<Inputs />} />
          <Route exact path="/badges" element={<Badges />} />
          <Route exact path="/coressistema" element={<Coressistema />} />
          <Route exact path="/modal" element={<Modal />} />
          <Route exact path="/charts" element={<Graficos />} />
          <Route
            exact
            path="/identidadeverbal"
            element={<Identidadeverbal />}
          />
          <Route exact path="/tagline" element={<Tagline />} />
          <Route exact path="/manifesto" element={<Manifesto />} />
          <Route exact path="/exemplos" element={<Exemplos />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Rotas;
