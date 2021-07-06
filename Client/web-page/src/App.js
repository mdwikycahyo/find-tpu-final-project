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
import Xendit from './components/Xendit';
import FinalPayment from './components/FinalPayment';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/detail/:id'>
            <Detail />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/payment/:id'>
            <Payment />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/xendit/:id'>
            <Xendit />
          </Route>
          <Route exact path='/checkout/:id'>
            <FinalPayment />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
