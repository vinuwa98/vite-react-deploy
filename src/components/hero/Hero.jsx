import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3, // Staggers child animations
    },
  },

  scrollButton:{
    opacity:0,
    y:50,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  },
};

const sliderVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3, // Staggers child animations
    },
  },

  scrollButton:{
    opacity:0,
    y:50,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  },
};

const childVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.1 } },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Passionate Software Engineer</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer <br /> and <br /> ICT Tutor
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <motion.button>See the latest Work</motion.button>
            <motion.button>Contact Me</motion.button>
          </motion.div>
          
          <motion.img variants={textVariants} animate= "scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
      </div>

      <div className="slidingTextContainer">
        Coder Tutor ScienceLover Gamer 
      </div>

      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
