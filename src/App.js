import "./assets/stylesheets/app.css";
import Topnav from "./components/Topnav";
import Teams from "./components/Teams";
import Main from "./components/Main";
import About from "./components/About";
// import Discord from "./components/Discord";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="container">
      <Topnav />
      <Main />
      <About />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
