import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services"; // Import Services component

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax type="Services" />
      </section>
      <section>
        <Services /> {/* Render Services component */}
      </section>
      <section id="Portfolio">
        <Parallax type="Portfolio" />
      </section>
      <section>Portfolio</section>
      <section id="Contact">Contact</section>
      <section id="AboutUs">About Us</section>
    </div>
  );
};

export default App;
