import React from 'react'
import moment from 'moment'
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
      data: JSON.parse(localStorage.getItem("data")),
      swimData: [],
      hikeData: [],
      gymData: [],
      swimTime: [],
      hikeTime: [],
      gymTime: []
  }

  componentDidMount() {
    console.log(this.state.data)
    this.filterData()
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    data.push(selectedEntry)
    this.setState({
      data
    }, this.filterData)
    localStorage.setItem("data", JSON.stringify(data))
  }


  filterData = () => {
    // Setup the arrays of dates

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
    // put all data in state
    this.setState({
      swimData,
      hikeData,
      gymData
    })

    // Setup arrays of activity times

    this.activityList.forEach((activityType) => {
      let totalTime = 0;

      this.state.data.forEach((activity) => {
        if (activity.selectedActivity === activityType) {
          totalTime += parseFloat(activity.selectedDuration);
        }
      })

      let stateEntry = activityType + "Time";

      this.setState({
        [stateEntry]: totalTime
      })
    })

    // Setup Stream data
    let streamData = []

    for(let daysAgo = 30; daysAgo >= 0; --daysAgo) {
      let loopDate = moment().subtract('days', daysAgo)

      let entry = {
        "date": loopDate,
        "swim": 0,
        "hike": 0,
        "gym": 0
      }

      let dayActivities = this.state.data.filter((activity) => {
        let activityDate = moment(activity.selectedDate)
        return activityDate.isSame(loopDate, 'day');
      })

      dayActivities.forEach((activity) => {
        entry[activity.selectedActivity] += parseFloat(activity.selectedDuration);
      })

      streamData.push(entry)
    }

    this.setState({
      streamData
    })
    console.log(streamData);
  }

  render() {
    return (
        <Router>
        <div>
          <Link to="/activity">Add an activity</Link>
          <br />
          <Link to="/calendar">View your calendar</Link>
          <br />
          <Link to="/stats">View stats page</Link>
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
