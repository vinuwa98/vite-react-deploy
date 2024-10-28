import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Pasionate Software Engineer</h2>
          <h1>Software Engineer <br/> and <br/>ICT Tutor</h1>
        </div>
        <div className="buttons">
          <button>See the latest Work</button>
          <button>Contact</button>
        </div>
        <img src="/scroll.png" alt="" />
        </div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero