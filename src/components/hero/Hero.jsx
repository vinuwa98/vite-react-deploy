// Hero.jsx
import React from "react";
import "./hero.scss";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";

const Hero = () => {
  // Cursor-based Motion Values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Track mouse movement within the hero section
  const handleMouseMove = (event) => {
    cursorX.set(event.clientX / window.innerWidth - 0.2); // Normalize to [-0.5, 0.5]
    cursorY.set(event.clientY / window.innerHeight - 0.2); // Normalize to [-0.5, 0.5]
  };

  // Apply small transformations to the background based on cursor movement
  const xTransform = useTransform(cursorX, [-0.5, 0.5], ["-10%", "10%"]);
  const yTransform = useTransform(cursorY, [-0.5, 0.5], ["-10%", "10%"]);

  // Continuous subtle background movement
  const continuousAnimation = useAnimation();
  React.useEffect(() => {
    continuousAnimation.start({
      x: ["-5%", "5%"],
      y: ["-5%", "5%"],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20, // Slow movement
      },
    });
  }, [continuousAnimation]);

  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      {/* Background Stars with Continuous and Cursor-based Movement */}
      <motion.div
        className="stars"
        style={{
          x: xTransform,
          y: yTransform,
        }}
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
