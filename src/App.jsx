import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Login from './pages/Login';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Home from './pages/Home';


function App() {
  return (
    <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={Login} />
          <Route exact path="/step1" component={Step1} />
          <Route exact path="/step2" component={Step2} />
          <Route exact path="/home" component={Home} />

        </Switch>
    </Router>
  );
}

export default App;
