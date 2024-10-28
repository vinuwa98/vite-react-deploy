// Import the main SCSS file for the app's styles
import "./app.scss"

// Define the main App component, which serves as the root of the application
const App = () => {

   // The component returns a simple structure containing three sections within a div
  return <div>
      {/* This section will serve as the 'Hero' section, typically containing the main
          title, subtitle, or introductory content that users see first */}
      <section>Hero</section>
      
      {/* This section is likely intended for a 'Parallax' effect, creating a visually
          engaging experience where background content moves at a different speed
          than foreground content */}
      <section>Parallax</section>
      
      {/* This section is intended to showcase 'Services' offered, typically including
          a list or summary of features, offerings, or skills */}
      <section>Services</section>
    </div>;
};

// Export the App component as the default export, allowing it to be used 
// in other files or modules as the main application component
export default App;
