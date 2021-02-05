import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Components/Pages/HomePage/HomePage';
function App() {
  return (
    <div id="container">
      <Router>
          <Switch>
              <Route exact path="/">
              <HomePage></HomePage>
              </Route>
              <Route path="/homePage">
              <HomePage></HomePage>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
