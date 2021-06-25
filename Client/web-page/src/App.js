import logo from './logo.svg';
import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store/index.js';
import Detail from './components/Detail';
import About from './components/About';
import Payment from './components/Payment';
import Contact from './components/Contact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/detail'>
            <Detail />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/payment'>
            <Payment />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
