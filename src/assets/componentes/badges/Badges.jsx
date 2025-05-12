import "./index.scss";
import Lateral from "../lateral/Lateral";
import Conteudobadges from "../conteudobadges/Conteudobadges";
import { motion } from "framer-motion";

function Badges() {
  return (
    <>
      <main className="Inputs">
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
          <Conteudobadges />
        </motion.div>
      </main>
    </>
  );
}

export default Badges;
