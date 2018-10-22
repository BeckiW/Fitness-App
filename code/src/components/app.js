import React from 'react'
import Clubs from './Clubs'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Calendar from './calendar'
import ClubList from './ClubList'
import Activity from "./activity"
import Stats from "./stats"

class App extends React.Component {

  activityList = ["swim", "hike", "gym"]
  durationList = [0.5, 1, 2, 4, 8]

  state = {
      data: [],
      swimData: [],
      hikeData: [],
      gymData: [],
      swimTime: [],
      hikeTime: [],
      gymTime: []
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    data.push(selectedEntry)
    this.setState({
      data
    }, this.filterData)
  }


  filterData = () => {
    // create array of dates for each activity
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
    // sum total hours on each activity
    if (this.state.swimData.length > 0) {
    const swimTime = this.state.data.filter((activity) => (
      activity.selectedActivity === "swim"
    )).map((activity) => (
      parseFloat(activity.selectedDuration)
    )).reduce((total, num) => {
      return total + num
    })
    this.setState({
      swimTime
    })
    }
    if (this.state.hikeData.length > 0) {
    const hikeTime = this.state.data.filter((activity) => (
      activity.selectedActivity === "hike"
    )).map((activity) => (
      parseFloat(activity.selectedDuration)
    )).reduce((total, num) => {
      return total + num
    })
    this.setState({
      hikeTime
    })
    }
    if (this.state.gymData.length > 0) {
    const gymTime = this.state.data.filter((activity) => (
      activity.selectedActivity === "gym"
    )).map((activity) => (
      parseFloat(activity.selectedDuration)
    )).reduce((total, num) => {
      return total + num
    })
    this.setState({
      gymTime
    })
    }
    // put all data in state
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
                <Route exact path="/stats"
                  render={(props) => <Stats {...props}
                    swimTime={this.state.swimTime}
                    hikeTime={this.state.hikeTime}
                    gymTime={this.state.gymTime} />}
                  />
              <Route path="/list" component={ClubList}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App
