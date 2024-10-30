import "./parallax.scss";
import {motion} from "framer-motion";

const Parallax = ({ type }) => {
  return (
    <div 
        className="parallax"
        style={{
            background:
                type === "services"
                    ? "linear-gradient(180deg, #1c0327, #43075c)" 
                    : "linear-gradient(180deg, #43075c, #1c0327)",
        }}
    >
        <motion.h1>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax