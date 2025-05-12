import "./index.scss";
import Video from "../video/Video";
import Lateral from "../lateral/Lateral";

//--REACT HOOKS

import { createRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useOutlet,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { motion} from 'framer-motion'

function Home() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <>
      <main className="Home">
        <Lateral />
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, x: -window.innerWidth, transition: { duration: 1 }}}
            className="motiondiv"
          >
          <Video />
          </motion.div>
        
      </main>
    </>
  );
}

export default Home;
