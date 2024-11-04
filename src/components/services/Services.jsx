import "./Services.scss";
import {motion} from "framer-motion"

const Services = () => {
  return (
    <motion.div className="services">
        <motion.div className="textContainer">
            <p>I focus on helping your brand grow 
            <br/>and move forward 
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For your</b> Business
                </h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Branding</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    At voluptas asperiores illo hic expedita repellat est saepe dolorem voluptates culpa alias,
                    debitis amet tempora vel et iusto. Nobis, necessitatibus cupiditate!
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    At voluptas asperiores illo hic expedita repellat est saepe dolorem voluptates culpa alias,
                    debitis amet tempora vel et iusto. Nobis, necessitatibus cupiditate!
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    At voluptas asperiores illo hic expedita repellat est saepe dolorem voluptates culpa alias,
                    debitis amet tempora vel et iusto. Nobis, necessitatibus cupiditate!
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    At voluptas asperiores illo hic expedita repellat est saepe dolorem voluptates culpa alias,
                    debitis amet tempora vel et iusto. Nobis, necessitatibus cupiditate!
                </p>
                <button>Go</button>
            </div>
        </motion.div>
    </motion.div>
        
  )
}

export default Services