import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import {Banner, Contact, Footer, NavBar, Skills} from "./components";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
