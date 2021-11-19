
export default App
import "./assets/stylesheets/app.css";
import Topnav from "./components/Topnav";
import Teams from "./components/Teams";

const App = () => {
  return (
    <div className="container">
      <Topnav />
      <Main/>
      <Teams />
    </div>
  );
};

export default App;
