import "./index.scss";
import Lateral from "../lateral/Lateral";
import Conteudologotipo from "../conteudologotipo/Conteudologotipo";
import { motion} from 'framer-motion'

function Logotipo() {
  return (
    <>
      <main className="Logotipo">
        <Lateral />
        <motion.div
            initial={{opacity: 0, x: 1000, transition: { duration: 1 }}}
            animate={{opacity: 1, x: 0, transition: { duration: 1 }}}
            exit={{opacity: 0, x: -window.innerWidth, transition: { duration: 1 }}}
            className="motiondiv"
          >
        <Conteudologotipo />
        </motion.div>
      </main>
    </>
  );
}

export default Logotipo;
