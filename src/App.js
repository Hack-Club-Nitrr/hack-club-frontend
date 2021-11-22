import "./assets/stylesheets/app.css";
import Topnav from "./components/Topnav";
import Teams from "./components/Teams";
import About from "./components/About";
const App = () => {
  return (
    <div className="container">
        <Topnav />
        <Teams />
        <About />
    
    </div>
  );
};

export default App;
