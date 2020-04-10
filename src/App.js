import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddressBook from './containers/addressBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/address" component={AddressBook}/>
      </Switch>
    </div>
  );
}

export default App;
