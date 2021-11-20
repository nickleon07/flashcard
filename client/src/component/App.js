import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewDeckName from './NewDeck.js';
import Add from './Add.js';

const App = () => {
  return (
     <Router>

      <div>Welcome to SmashCards!</div>

      <Link to="/new">
         <button>New Deck</button>
      </Link>
      <Link to="/load"> <button>Load Deck</button></Link>

    <Switch>
      <Route path="/new">
        <NewDeckName />
      </Route>
      <Route path="/load">
        <div>Load</div>
        {/* <LoadDeck /> */}
      </Route>
      <Route path='/add'>
        <Add/>
      </Route>
    </Switch>
    </Router>

  );
};

export default App;