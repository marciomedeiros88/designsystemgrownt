import "./index.scss";
import Lateral from "../lateral/Lateral";
import Conteudomodal from "../conteudomodal/Conteudomodal";
import { motion } from "framer-motion";

function Modal() {
  return (
    <>
      <main className="Modal">
        <Lateral />
        <motion.div
          initial={{ opacity: 0, x: 1000, transition: { duration: 1 } }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          exit={{
            opacity: 0,
            x: -window.innerWidth,
            transition: { duration: 1 },
          }}
          className="motiondiv"
        >
          <Conteudomodal />
        </motion.div>
      </main>
    </>
  );
}

export default Modal;
