import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import "./sidebar.scss";
import ToggleButton from "./ToggleButton/ToggleButton";

const Sidebar = () => {
  const[open,setOpen] = useState(false)

  const variants = {
    open:
    closed:
  }
  return <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg">
        <Links/>
      </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
};

export default Sidebar;
