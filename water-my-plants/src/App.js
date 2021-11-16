import { Switch, Link } from 'react-router-dom';
import './App.css';

// Component Imports
import PlantList from './components/PlantList';
import Account from './components/Account';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {/* Check for user auth, then render plantList Link */}
          {/* Check for user auth, then render Account Link */}
          {/* !user ? SignUp : SignOut */}
        </nav>
      </header>

      <Switch>
        <Route path='/signup'>
          <SignUp />
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
    </div>
  );
}

export default App;
