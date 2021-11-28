

import "./assets/stylesheets/app.css";
import Topnav from "./components/Topnav";
import Teams from "./components/Teams";
import Main from "./components/Main";
import About from "./components/About";
const App = () => {
  return (
    <div className="container">
        <Topnav />
        <Main />
        <About />
        <Teams />
    </div>
  );
};

export default App;
