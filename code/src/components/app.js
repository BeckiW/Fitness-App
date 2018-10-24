import React from 'react'
import moment from 'moment'
import Clubs from './Clubs'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Calendar from './calendar'
import ClubList from './ClubList'
import Activity from "./activity"
import Stats from "./stats"

const activityList = ["swim", "hike", "gym"];
const durationList = [0.5, 1, 2, 4, 8];


class App extends React.Component {

  state = {
        data: localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [],
        swimData: [],
        hikeData: [],
        gymData: [],
        swimTime: [],
        hikeTime: [],
        gymTime: [],
        streamData: [],
        calenderData: []
    }

  componentDidMount() {
    this.addBubbleData()
    this.addStreamData()
    this.addCalendarData()
  }

  addEntry = (selectedEntry) => {
    const data = this.state.data
    if (this.state.data !== null) {
      data.push(selectedEntry)
      this.setState({
        data
      }, () => this.componentDidMount())
      localStorage.setItem("data", JSON.stringify(data))
    }
  }

  // Setup arrays of activity times
  addBubbleData = () => {
    activityList.forEach((activityType) => {
      let totalTime = 0;
      if (this.state.data !== null) {
        this.state.data.forEach((activity) => {
          if (activity.selectedActivity === activityType) {
            totalTime += parseFloat(activity.selectedDuration);
          }
        })
        let stateEntry = activityType + "Time";
        this.setState({
          [stateEntry]: totalTime
        })
      }
    })
  }

  // setup stream data
  addStreamData = () => {
    let streamData = []
    if (this.state.data !== null) {
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
    console.log('streamData ' + streamData);
    }
  }

  // setup calendardata
  addCalendarData = () => {
    let calenderData = []
    if (this.state.data !== null) {
      let entry = {
        "date": null,
        "value": 0
      }
      let calenderActivity = this.state.streamData.filter(days => {
        return (days.swim > 0 || days.gym > 0 || days.hike > 0 )
      })
      calenderActivity.forEach((days) => {
        if(days.swim > 0 && days.hike == 0 && days.gym == 0) {
           entry["date"] = days.date
           entry["value"] = 100
        } else if(days.hike > 0 && days.swim == 0 && days.gym == 0) {
          entry["date"] = days.date
          entry["value"] = 200
        } else if(days.gym > 0 && days.hike == 0 && days.swim == 0) {
          entry["date"] = days.date
          entry["value"] = 300
        } else {
          entry["date"] = days.date
          entry["value"] = 400
        }
      })
      calenderData.push(entry)
      this.setState({
        calenderData
      })
    }
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
                  activityList={activityList}
                  durationList={durationList}
                  onClick={this.addEntry} />}
              />
              <Route exact path="/calendar"
                render={(props) => <Calendar {...props}
                  data={this.state.data}
                  streamData={this.state.streamData} />}
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
