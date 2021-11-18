import { Switch, Link, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Component Imports
import Account from './components/Account';
import Home from './components/Home';
import Login from './components/Login';
import PlantList from './components/PlantList';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className="App">
      <header>
        <nav>
          <h4>Water My Plants </h4>
          <ul>
            <li>
              {token && <Link to='/plants'>My Plants</Link>}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {!token && <Link to="/login">Login</Link>}
            </li>
            <li>
              {!token ? <Link to="/signup">Sign Up</Link> : <Link to='/signout'>Sign Out</Link>}
            </li>
          </ul>
            {/* Check for user auth, then render plantList Link */}
            {/* Check for user auth, then render Account Link */}
            {/* !user ? SignUp & SignIn : SignOut */}
            {/* the other links such as signout and plants will only be available to auth users so im gonna wait - */}
            {/* to do that when we have setup the authentication */}
        </nav>
      </header>

      <Switch>
        <PrivateRoute component={PlantList} exact path='/plants' />
        <PrivateRoute component={Account} exact path='/account'/>
        <PrivateRoute component={SignOut} setToken={setToken} exact path='/signout' />

        <Route path='/login'>
          <Login setToken={setToken}/>
        </Route>

        <Route path='/signup'>
          <SignUp />
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
