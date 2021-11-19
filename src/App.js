import './assets/stylesheets/app.css';
import Topnav from './components/Topnav';
import Main from './components/Main'
const App = () => {
    return (
        <div className="container">
            <Topnav/>
            <Main/>
        </div>
    )
}

export default App
