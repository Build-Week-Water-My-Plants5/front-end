import { Switch, Link, Route } from 'react-router-dom';
import './App.css';

// Component Imports
import Account from './components/Account';
import Home from './components/Home';
import Login from './components/Login';
import PlantList from './components/PlantList';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {/* Check for user auth, then render plantList Link */}
          {/* Check for user auth, then render Account Link */}
          {/* !user ? SignUp & SignIn : SignOut */}
        </nav>
      </header>

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signout'>
          <SignOut />
        </Route>
        <Route path='/plants'>
          <PlantList />
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>

      {/* Footer HTML goes here! */}
    </div>
  );
}

export default App;
