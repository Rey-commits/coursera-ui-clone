/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Navigation from "./components/Navigation";
import NavTabs from './components/NavTabs';
import Tutorials from './components/Tutorials';
import Home from './components/Home';
import Curriculum from './components/Curriculum';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <div>
            <Router>
                <Navigation/>
                <Hero/>
                <NavTabs/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/tutorials' component={Tutorials}/>
                    <Route path="/curriculum" component={Curriculum}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
