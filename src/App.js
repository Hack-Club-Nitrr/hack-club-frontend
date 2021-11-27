

import "./assets/stylesheets/app.css";
import Topnav from "./components/Topnav";
import Teams from "./components/Teams";
import Main from "./components/Main";
const App = () => {
  return (
    <div className="container">
      <Topnav />
      <Main />
      <Teams />
    </div>
  );
};

export default App;
