import React from 'react'
import Clubs from './Clubs'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Calendar from './calendar'
import ClubList from './ClubList'
import Activity from "./activity"

class App extends React.Component {

  render() {
    return (

      <Router>

      <Switch>
          <Route exact path="/" component={Clubs} />
          <Route exact path="/activity" component={Activity}/>
          <Route exact path="/calender" component={Calendar}/>
          <Route path="/list" component={Clubs}/>
        </Switch>

      </Router>

    )
  }

}

export default App
