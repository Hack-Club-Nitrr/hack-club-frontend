//css
import "./assets/stylesheets/app.css";

//Loader
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

//Components
import Teams from "./components/Teams";
const Main = lazy(() => import("./components/Main"));
const Topnav = lazy(() => import("./components/Topnav"));
const About = lazy(() => import("./components/About"));
const Event = lazy(() => import("./components/Event"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Loader />}>
        <Topnav />
        <Main />
        <About />
        <Event />
        <Teams />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
