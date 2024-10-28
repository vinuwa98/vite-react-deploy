import "./app.scss";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>

      <section id="Services">Services</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
      <section id="AboutUs">About Us</section>
    </div>
  );
};

export default App;
