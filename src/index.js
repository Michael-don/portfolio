import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navbar from './components/layout/navbar/Navbar';
import Home from './components/layout/pages/home/Home';
import About from './components/layout/pages/about/About';
import Contact from './components/layout/pages/contact/Contact'

class App extends Component {
  render() {
    return(
      <Router>
        <Fragment>
          <Navbar/>
      <div className = 'container'>
        <Switch>
          <Home title = "Hello World! I'm"/>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/about' component = {About} />
          <Route exact path = '/contact' component = {Contact} />
        </Switch>
      </div>
      </Fragment>
      </Router>

    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));


