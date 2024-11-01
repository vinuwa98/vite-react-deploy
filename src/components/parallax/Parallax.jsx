import {useRef} from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {

    const ref = useRef()

    const {scrollProgress} = useScroll({
        target:ref,
        offset:["start start","end start"]
    });

    const yText = useTransform(scrollProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);

<<<<<<< HEAD
    return (
        <div 
            className="parallax"
            ref={ref}
            style={{
                background: 
                    type === "services"
                        ? "linear-gradient(180deg, #1c0327, #43075c)" 
                        : "linear-gradient(180deg, #43075c, #1c0327)"
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "services" ? "what Am I Doing?" : "What I Did?"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
=======
  return (
    <div 
        className="parallax"
        ref={ref}
        style={{
            background:
                type === "services"
                    ? "linear-gradient(180deg, #1c0327, #43075c)" 
                    : "linear-gradient(180deg, #43075c, #1c0327)",
        }}
    >
        <motion.h1 style={{ y: yText }}>
            {type === "services" ? "What I Do?" : "What I Did?"}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{y:yBg}} className="planets"></motion.div>
        <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  );
>>>>>>> parent of e67ed0c (Complete Parallax Part)
};

export default Parallax