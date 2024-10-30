import "./parallax.scss";

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
        <h1>{type === "services" ? "What I Do?" : "What I Did?"}</h1>
        <div className="mountains"></div>
        <div className="planets"></div>
        <div className="stars"></div>
    </div>
  );
};

export default Parallax