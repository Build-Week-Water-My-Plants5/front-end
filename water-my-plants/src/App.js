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
          <Link to="/">Home </Link>
          <Link to="/login">Login </Link>
          <Link to='/signup'>Sign Up </Link>
          <Link to="/"> </Link>

        {/* the other links such as signout and plants will only be available to auth users so im gonna wait - */}
        {/* to do that when we have setup the authentication */}
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
      {/* i was thinking that for the navbar we can just make it stick to the top of the page:its basically css but i can do it if anything */}
    </div>
  );
}

export default App;
