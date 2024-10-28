import "./navbar.scss";

// Define the Navbar component
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Main Navbar Section */}

      {/* Sidebar Wrapper */}
      <div className="wrapper">
        <span>Vinod Warnakulasooriya</span>
        
        {/* Social Media Links */}
        <div className="social">
          <a href="https://web.facebook.com/vinuwa.fb/"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          <a href="#"><img src="/dribbble.png" alt="Dribbble" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
