import logo from './logo.svg';
import './App.css';
import Display from './Project/Display';
import Login from './Project/Login';
import Signup from './Project/Signup';
import useDarkMode from './Project/useDarkMode';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import Logout from './Project/Logout';
import PostAns from './Project/PostAns';


const App = () => {
  const [status, setStatus] = useState(false)
  const [mode, font, isClick] = useDarkMode(status)
  let Active = JSON.parse(sessionStorage.getItem('ActiveUser'))
  if (Active == null) {
    Active = { Status: false }
    sessionStorage.setItem('ActiveUser', JSON.stringify(Active))
  }

  return (
    <div className="App">
      <div className='container-fluid' style={{ backgroundColor: mode, color: font, height: '500vw' }}>
        <Router>
          <h1 style={{ fontFamily: ('Papyrus', 'Fantasy'), color: '#D45757', paddingTop: '20px' }}>Question Answering System</h1>
          <hr></hr>
          <div style={{ float: 'left', paddingLeft: '20px', paddingTop: '20px' }}>
            <NavLink style={{ paddingLeft: '20px' }} exact activeClassName="active" to="/">Home</NavLink>
            {
              Active.Status ? <NavLink style={{ padding: '20px' }} activeClassName="active" to="/logout">Logout</NavLink> :
                <><NavLink style={{ padding: '20px' }} activeClassName="active" to="/login">Login</NavLink>
                  <NavLink activeClassName="active" to="/signup">Sign Up</NavLink></>}
            <div style={{ float: 'left' }}>
              <div>Change Theme</div>
              <button className="btn btn-info" onClick={() => isClick ? setStatus(false) : setStatus(true)}>{isClick ? 'Day Mode' : 'Dark Mode'}</button>
            </div>
          </div>

          <Switch>
            <Route path='/' exact component={Display} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/logout' component={Logout} />
            <Route path='/postAns' component={PostAns} />


          </Switch>
        </Router>
      </div>
    </div>
  );

}

export default App;
