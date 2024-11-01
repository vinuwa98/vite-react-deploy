// Hero.jsx
import React from "react";
import "./hero.scss";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  // Continuous subtle background movement
  const continuousAnimation = useAnimation();
  React.useEffect(() => {
    continuousAnimation.start({
      x: ["-28%", "0%"],  // Limited to small shifts around the center
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 15, // Slow movement for a subtle effect
      },
    });
  }, [continuousAnimation]);

  return (
    <div className="hero">
      {/* Background Stars with Continuous Motion */}
      <motion.div
        className="stars"
        animate={continuousAnimation} // Apply continuous subtle motion
      ></motion.div>

      {/* Rest of Hero Section */}
      <div className="wrapper">
        <motion.div
          className="textContainer"
          initial="initial"
          animate="animate"
          variants={{
            initial: { x: -500, opacity: 0 },
            animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
          }}
        >
          <motion.h2>Passionate Software Engineer</motion.h2>
          <motion.h1>
            Software Engineer <br /> and <br /> Information Technology Tutor
          </motion.h1>

          <motion.div className="buttons">
            <motion.button>See the latest Work</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          <motion.img src="/scroll.png" alt="scroll" />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        initial={{ x: 0 }}
        animate={{ x: "-75%", transition: { repeat: Infinity, duration: 30, repeatType: "mirror" } }}
      >
        Coder Gamer Guitarist ScienceLover Tutor
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
