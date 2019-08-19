import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './components/home_component/home_component'
import HomeComponent from './components/home_component/home_component';
import AboutComponent from './components/about_component/about_component';
import LoginComponent from './components/login_component/login_component';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={HomeComponent} />
          <Route exact path='/about' component={AboutComponent} />
          <Route exact path='/login' component={LoginComponent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
