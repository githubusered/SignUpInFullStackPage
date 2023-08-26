import SignIn from './Pages/SignIn';
import './App.css';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GeneralPage from './Pages/GeneralPage';

function App() {
  return (
    // <div className="App">
    //     <SignIn/>
    //     <SignUp />
    // </div>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" exact component={GeneralPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
