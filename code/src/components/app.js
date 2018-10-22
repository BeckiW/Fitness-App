import React from 'react'
import Clubs from './Clubs'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Calendar from './calendar'
import ClubList from './ClubList'
import Activity from "./activity"

class App extends React.Component {

  activityList = ["swim", "hike", "gym"]
  durationList = ["30 mins", "1 hour", "2 hours", "4 hours", "8 hours"]

  state = {
      data: [],
      swimData: [],
      hikeData: [],
      gymData: []
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    data.push(selectedEntry)
    this.setState({
      data
    }, this.filterData)
  }


  filterData = () => {
    const swimData = this.state.data.filter((activity) => (
      activity.selectedActivity === "swim"
    )).map((activity) => (
      activity.selectedDate
    ))
    const hikeData = this.state.data.filter((activity) => (
      activity.selectedActivity === "hike"
    )).map((activity) => (
      activity.selectedDate
    ))
    const gymData = this.state.data.filter((activity) => (
      activity.selectedActivity === "gym"
    )).map((activity) => (
      activity.selectedDate
    ))
    this.setState({
      swimData,
      hikeData,
      gymData
    })
  }

  render() {
    return (
        <Router>
        <div>
          <Link to="/activity">Add an activity</Link>
          <br />
          <Link to="/calendar">View your calendar</Link>
          <Switch>
              <Route exact path="/" component={Clubs} />
              <Route exact
                path="/activity"
                render={(props) => <Activity {...props}
                  activityList={this.activityList}
                  durationList={this.durationList}
                  onClick={this.addEntry} />}
              />
              <Route exact path="/calendar"
                render={(props) => <Calendar {...props}
                  data={this.state.data}
                  swimData={this.state.swimData}
                  hikeData={this.state.hikeData}
                  gymData={this.state.gymData} />}
                />
              <Route path="/list" component={ClubList}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App
