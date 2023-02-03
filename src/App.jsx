import { createBrowserHistory } from 'history';
import {
    Redirect,
    Route,
    Router,
    Switch
} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Step4 from './pages/Step4';
import Step5 from './pages/Step5';
import Step6 from './pages/Step6';
import Step7 from './pages/Step7';
import Step8 from './pages/Step8';
const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route exact path="/login" component={Login} />
                <Route exact path="/step1" component={Step1} />
                <Route exact path="/step2" component={Step2} />
                <Route exact path="/step3" component={Step3} />
                <Route exact path="/step4" component={Step4} />
                <Route exact path="/step5" component={Step5} />
                <Route exact path="/step6" component={Step6} />
                <Route exact path="/step7" component={Step7} />
                <Route exact path="/step8" component={Step8} />
            </Switch>
        </Router>
    );
}

export default App;
