import "./assets/stylesheets/app.css";
import Topnav from "./components/Topnav";
import Teams from "./components/Teams";

const App = () => {
  return (
    <div className="container">
      <Topnav />
      <Teams />
    </div>
  );
};

export default App;
